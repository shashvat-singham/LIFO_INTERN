const { Dish } = require("../models/dish");
const express = require("express");
const { response } = require("express");
const { Restaurant } = require("../models/restaurant");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const FILE_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error('invalid image type');
    if(isValid){
      uploadError = null;
    }
    cb(uploadError, 'public/uploads')
  },
  filename: function(req, file, cb){
    const fileName = file.originalname.split(' ').join('-');
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`)
  }
})

const uploadOptions = multer({storage: storage})

router.get(`/`, async (req, res) => {
  let filter = {};
  console.log(req.query.id);
  if (req.query.id) {
    filter = { restaurant: req.query.id};
  }
  const dishList = await Dish.find(filter); //.populate('restaurant');      // .select('name');
  if (!dishList) {
    response.status(500).json({ success: false });
  }
  res.status(200).send(dishList);
});

router.get(`/?id`, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Dish");
  console.log(req.params);
  const dish = await Dish.find({restaurant: req.params.id});
  if (!dish) {
    response.status(500).json({ message: "Dish not Found" });
  }
  res.status(200).send(dish);
});

router.get(`/get/top/`, async (req, res) => {
  //router.get(`/get/top/:count`, async (req,res) => {
  // const count = req.params.count ? req.params.count : 0;
  const dish = await Dish.find({ featured: true }); //.limit(+count);
  if (!dish) res.status(500).json({ success: false });
  res.send(dish);
});

router.post(`/`, uploadOptions.single('img') , async (req, res) => {
  // let restaurant = await Restaurant.findById(req.body.restaurant);
  // if (!restaurant) return res.status(400).send("Invalid Restaurant");
  // const imgfile = req.file
  // if (!imgfile) return res.status(400).send("No file in request");
  // const fileName = req.file.filename
  // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
  let dish = new Dish({
    name: req.body.name,
    restaurant: req.body.restaurant,
    img: req.body.img,
    price: req.body.price,
    veg: req.body.veg,
    prep_time: req.body.prep_time,
    featured: req.body.featured,
  });
  dish = await dish.save();
  if (!dish) return res.status(500).send("The dish cannot be added");
  res.send(dish);
});

router.put(`/:id`, async (req, res) => {
  // let restaurant = await Restaurant.findById(req.body.restaurant);
  // if (!restaurant) return res.status(400).send("Invalid Restaurant");
  // if (!mongoose.isValidObjectId(req.params.id))
  //   return res.status(400).send("Invalid Dish");
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
  if (!dish) return res.status(400).send("Dish cannot be found");
  res.status(200).send(dish);
});

router.delete(`/:id`, (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Dish");
  Dish.findByIdAndRemove(req.params.id)
    .then((dish) => {
      if (dish) {
        return res.status(200).json({ success: true, message: "Dish deleted" });
      } else
        res.status(404).json({ success: false, message: "Dish not Found" });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
