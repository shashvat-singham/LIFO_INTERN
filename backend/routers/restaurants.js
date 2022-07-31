const { Restaurant } = require("../models/restaurant");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

router.get(`/`, async (req, res) => {
  console.log('this one');
  const restaurantList = await Restaurant.find();
  if (!restaurantList) {
    response.status(500).json({ success: false });
  }
  res.send(restaurantList);
});

router.post(`/`, async (req, res) => {
  const check = await Restaurant.findOne({ phone: req.body.phone });
  if (check) {
    return res.status(400).send("Restaurant with same phone number exists");
  }
  let restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
    img: req.body.img,
    open_time: req.body.open_time,
    close_time: req.body.close_time,
    phone: req.body.phone,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    upi: req.body.upi,
  });
  restaurant
    .save()
    .then((createdRestaurant) => {
      res.status(201).json(createdRestaurant);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

router.post(`/login`, async (req, res) => {
  const user = await Restaurant.findOne({
    phone: req.body.phone
  });
  console.log(user);
  if (!user) {
    return res.status(400).send("User not Found");
  }
  if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
    return res.status(201).send(JSON.parse(JSON.stringify(user)))
  } else {
    return res.status(400).send('Incorrect Password')
  }
});

router.put(`/:id`, async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('Invalid Restaurant');
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
    if (!restaurant) return res.status(400).send("Restaurant cannot be found");
    res.status(200).send(restaurant);
});

router.delete(`/:id`, (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('Invalid Restaurant');
    Restaurant.findByIdAndRemove(req.params.id)
      .then((restaurant) => {
        if (restaurant) {
          return res.status(200).json({ success: true, message: "Restaurant deleted" });
        } else
          res.status(404).json({ success: false, message: "Restaurant not Found" });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
