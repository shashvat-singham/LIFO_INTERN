const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { response } = require("express");
var nodemailer = require('nodemailer');
const axios = require('axios');

router.get(`/`, async (req, res) => {
  const orderList = await Order.find()
    .populate("user", "name phone email")
    .populate("restaurant", "name")
    .sort("date");
  if (!orderList) {
    response.status(500).json({ success: false });
  }
  console.log(orderList);
  res.send(orderList);
});

router.get(`/restaurantOrders`, async (req, res) => {
  let filter = {};
  console.log(req.query);
  if (req.query.id) {
    filter = { restaurant: req.query.id};
  }
  const restOrders = await Order.find(filter).sort([['date', 'descending']]).populate("user", "name phone email");
    // .populate({ path: "orderItems", populate: "dish" })
  if (!restOrders) {
    response.status(500).json({ success: false });
  }
  console.log(restOrders);
  res.send(restOrders);
});

router.get(`/userOrders`, async (req, res) => {
  let filter = {};
  console.log('ye rho',req.query);
  if(req.query.id){
    filter = {user: req.query.id};
  }
  const userOrders = await Order.find(filter)
    .populate("restaurant", "name address phone email")
    .sort([['date', 'descending']]);
  if (!userOrders) {
    response.status(500).json({ success: false });
  }
  console.log(userOrders);
  res.send(userOrders);
});

router.post(`/`, async (req, res) => {
  let order = new Order({
    orders: JSON.stringify(req.body.orders),
    grandTotal: req.body.grandTotal,
    overHeads: req.body.overHeads,
    instructions: req.body.instructions,
    status: req.body.status,
    totalPrice: req.body.totalPrice,
    user: req.body.user_id,
    restaurant: req.body.restaurant_id,
    date: req.body.date,
  });
  // console.log('in backend:',req.body);
  // console.log('in backendx2:',order);
  order = await order.save();
  if (!order) return res.status(400).send("Cannot create order");

  res.send(order);
});

router.post('/cftoken', (req,res) => {
  let order = {
    orderId: req.body.orderId,
    orderAmount: req.body.orderAmount,
    orderCurrency: 'INR'
  }
  let config = {
    headers: {
      'x-client-id': process.env.app_id,
      'x-client-secret': process.env.app_secret,
      'Content-Type': 'application/json'
    }
  }
  axios.post('https://api.cashfree.com/api/v2/cftoken/order',order,config).then((response) => {
    return res.status(200).send(response.data);
  }).catch((err) => {
    console.log(err);
  })

})

router.put(`/`, async (req, res) => {
  let filter = {};
  console.log('ye created',req.body);
  // Mailer begins
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zackeffron454',
      pass: 'juvotukdlzzdnjxq'
    }
  });
  var mailOptions = {
    from: 'zackeffron454@gmail.com',
    to: JSON.stringify(req.body.user),
    subject: 'Your order is ready',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

  // Mailer ends
  const order = await Order.findByIdAndUpdate(
    req.body.order,
    {
      status: 'Order Prepared',
    },
    { new: true }
  );
  if (!order) return res.status(400).send("Order cannot be found");
  res.status(200).send(order);
});

router.delete(`/:id`, (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Order");
  Order.findByIdAndRemove(req.params.id)
    .then(async (order) => {
      if (order) {
        await order.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndRemove(orderItem);
        });
        return res
          .status(200)
          .json({ success: true, message: "Order deleted" });
      } else
        res.status(404).json({ success: false, message: "Order not Found" });
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
