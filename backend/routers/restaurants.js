const { Restaurant } = require("../models/restaurant");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const asyncHandler = require("../helpers/async-handler");
const config = require("../config");

const toPublicRestaurant = (restaurant) => {
  const obj = restaurant.toJSON();
  delete obj.passwordHash;
  return obj;
};

router.get(
  `/`,
  asyncHandler(async (req, res) => {
    const restaurantList = await Restaurant.find().select("-passwordHash");
    res.send(restaurantList);
  })
);

router.post(
  `/`,
  asyncHandler(async (req, res) => {
    const check = await Restaurant.findOne({ phone: req.body.phone });
    if (check) {
      return res.status(409).json({
        success: false,
        message: "Restaurant with same phone number exists",
      });
    }
    if (!req.body.password) {
      return res
        .status(400)
        .json({ success: false, message: "password is required" });
    }
    const restaurant = await new Restaurant({
      name: req.body.name,
      address: req.body.address,
      img: req.body.img,
      open_time: req.body.open_time,
      close_time: req.body.close_time,
      phone: req.body.phone,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      upi: req.body.upi,
    }).save();
    res.status(201).json(toPublicRestaurant(restaurant));
  })
);

router.post(
  `/login`,
  asyncHandler(async (req, res) => {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res
        .status(400)
        .json({ success: false, message: "phone and password are required" });
    }
    const restaurant = await Restaurant.findOne({ phone });
    if (!restaurant || !bcrypt.compareSync(password, restaurant.passwordHash)) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid phone number or password" });
    }
    const token = jwt.sign(
      { restaurantId: restaurant.id, user_type: 2 },
      config.jwtSecret,
      { expiresIn: "7d" }
    );
    res.status(201).send({ ...toPublicRestaurant(restaurant), token });
  })
);

router.put(
  `/:id`,
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid restaurant id" });
    }
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        address: req.body.address,
        img: req.body.img,
        open_time: req.body.open_time,
        close_time: req.body.close_time,
        phone: req.body.phone,
      },
      { new: true }
    );
    if (!restaurant) {
      return res
        .status(404)
        .json({ success: false, message: "Restaurant not found" });
    }
    res.status(200).send(toPublicRestaurant(restaurant));
  })
);

router.delete(
  `/:id`,
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid restaurant id" });
    }
    const restaurant = await Restaurant.findByIdAndRemove(req.params.id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ success: false, message: "Restaurant not found" });
    }
    res.status(200).json({ success: true, message: "Restaurant deleted" });
  })
);

module.exports = router;
