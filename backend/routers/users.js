const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.get(`/`, async (req, res) => {
  const userList = await User.find().select('-passwordHash');
  if (!userList) {
    response.status(500).json({ success: false });
  }
  res.send(userList);
});

router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');
  if (!user) {
    response.status(500).json({ success: false });
  }
  res.send(user);
});

router.post(`/`, async (req, res) => {
  const check = await User.findOne({ phone: req.body.phone });
  if (check) {
    return res.status(400).send("User with same phone number exists");
  }
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    user_type: req.body.user_type,
    orders: [],
  });
  user = await user.save();

  if(!user)
    return res.status(400).send('The user cannot be created');

  res.send(user);
});

router.post(`/login`, async (req, res) => {
  const user = await User.findOne({
    phone: req.body.phone
  });
  console.log(user);
  if (!user) {
    return res.status(400).send({message: "User not Found"});
  }
  if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
    return res.status(201).send(JSON.parse(JSON.stringify(user)))
  } else {
    return res.status(400).send({message:'Incorrect Password'})
  }
});

module.exports = router;