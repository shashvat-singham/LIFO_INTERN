const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../helpers/async-handler");
const config = require("../config");

const toPublicUser = (user) => {
  const obj = user.toJSON();
  delete obj.passwordHash;
  return obj;
};

router.get(
  `/`,
  asyncHandler(async (req, res) => {
    const userList = await User.find().select("-passwordHash");
    res.send(userList);
  })
);

router.get(
  `/:id`,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.send(user);
  })
);

router.post(
  `/`,
  asyncHandler(async (req, res) => {
    const { name, phone, password } = req.body;
    if (!name || !phone || !password) {
      return res
        .status(400)
        .json({ success: false, message: "name, phone and password are required" });
    }
    const check = await User.findOne({ phone });
    if (check) {
      return res
        .status(409)
        .json({ success: false, message: "User with same phone number exists" });
    }
    const user = await new User({
      name,
      email: req.body.email,
      phone,
      passwordHash: bcrypt.hashSync(password, 10),
      user_type: req.body.user_type,
      orders: [],
    }).save();

    res.status(201).send(toPublicUser(user));
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
    const user = await User.findOne({ phone });
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid phone number or password" });
    }
    const token = jwt.sign(
      { userId: user.id, user_type: user.user_type },
      config.jwtSecret,
      { expiresIn: "7d" }
    );
    res.status(201).send({ ...toPublicUser(user), token });
  })
);

module.exports = router;
