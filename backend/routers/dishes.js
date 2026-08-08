const { Dish } = require("../models/dish");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const asyncHandler = require("../helpers/async-handler");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    cb(isValid ? null : new Error("Invalid image type"), "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get(
  `/`,
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.query.id) {
      if (!mongoose.isValidObjectId(req.query.id)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid restaurant id" });
      }
      filter = { restaurant: req.query.id };
    }
    const dishList = await Dish.find(filter);
    res.status(200).send(dishList);
  })
);

router.get(
  `/get/top`,
  asyncHandler(async (req, res) => {
    const dishes = await Dish.find({ featured: true });
    res.send(dishes);
  })
);

router.post(
  `/`,
  uploadOptions.single("img"),
  asyncHandler(async (req, res) => {
    const img = req.file
      ? `${req.protocol}://${req.get("host")}/public/uploads/${req.file.filename}`
      : req.body.img;
    const dish = await new Dish({
      name: req.body.name,
      restaurant: req.body.restaurant,
      img,
      price: req.body.price,
      veg: req.body.veg,
      prep_time: req.body.prep_time,
      featured: req.body.featured,
    }).save();
    res.status(201).send(dish);
  })
);

router.put(
  `/:id`,
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid dish id" });
    }
    const dish = await Dish.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        restaurant: req.body.restaurant,
        price: req.body.price,
        veg: req.body.veg,
        prep_time: req.body.prep_time,
        featured: req.body.featured,
      },
      { new: true }
    );
    if (!dish) {
      return res.status(404).json({ success: false, message: "Dish not found" });
    }
    res.status(200).send(dish);
  })
);

router.delete(
  `/:id`,
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid dish id" });
    }
    const dish = await Dish.findByIdAndRemove(req.params.id);
    if (!dish) {
      return res.status(404).json({ success: false, message: "Dish not found" });
    }
    res.status(200).json({ success: true, message: "Dish deleted" });
  })
);

module.exports = router;
