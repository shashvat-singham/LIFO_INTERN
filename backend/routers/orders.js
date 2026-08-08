const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const axios = require("axios");
const asyncHandler = require("../helpers/async-handler");

router.get(
  `/`,
  asyncHandler(async (req, res) => {
    const orderList = await Order.find()
      .populate("user", "name phone email")
      .populate("restaurant", "name")
      .sort("date");
    res.send(orderList);
  })
);

router.get(
  `/restaurantOrders`,
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
    const restOrders = await Order.find(filter)
      .sort([["date", "descending"]])
      .populate("user", "name phone email");
    res.send(restOrders);
  })
);

router.get(
  `/userOrders`,
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.query.id) {
      if (!mongoose.isValidObjectId(req.query.id)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid user id" });
      }
      filter = { user: req.query.id };
    }
    const userOrders = await Order.find(filter)
      .populate("restaurant", "name address phone email")
      .sort([["date", "descending"]]);
    res.send(userOrders);
  })
);

router.post(
  `/`,
  asyncHandler(async (req, res) => {
    const order = await new Order({
      orders: JSON.stringify(req.body.orders),
      grandTotal: req.body.grandTotal,
      overHeads: req.body.overHeads,
      instructions: req.body.instructions,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      user: req.body.user_id,
      restaurant: req.body.restaurant_id,
      date: req.body.date,
    }).save();
    res.status(201).send(order);
  })
);

// Cashfree payment token — requires CASHFREE_APP_ID / CASHFREE_APP_SECRET
router.post(
  `/cftoken`,
  asyncHandler(async (req, res) => {
    const appId = process.env.CASHFREE_APP_ID || process.env.app_id;
    const appSecret = process.env.CASHFREE_APP_SECRET || process.env.app_secret;
    if (!appId || !appSecret) {
      return res.status(503).json({
        success: false,
        message: "Payment gateway is not configured",
      });
    }
    try {
      const response = await axios.post(
        "https://api.cashfree.com/api/v2/cftoken/order",
        {
          orderId: req.body.orderId,
          orderAmount: req.body.orderAmount,
          orderCurrency: "INR",
        },
        {
          headers: {
            "x-client-id": appId,
            "x-client-secret": appSecret,
            "Content-Type": "application/json",
          },
        }
      );
      res.status(200).send(response.data);
    } catch (err) {
      console.error("Cashfree token request failed:", err.message);
      res.status(502).json({
        success: false,
        message: "Failed to create payment token",
      });
    }
  })
);

// Notifies the customer by email when SMTP is configured; email failures
// never block the status update.
function sendOrderReadyEmail(to) {
  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !to) return;
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  transporter.sendMail(
    {
      from: process.env.SMTP_FROM || SMTP_USER,
      to,
      subject: "Your order is ready",
      text: "Your order has been prepared and is ready for pickup.",
    },
    (error) => {
      if (error) console.error("Order email failed:", error.message);
    }
  );
}

router.put(
  `/`,
  asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndUpdate(
      req.body.order,
      { status: "Order Prepared" },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    sendOrderReadyEmail(req.body.user);
    res.status(200).send(order);
  })
);

router.delete(
  `/:id`,
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid order id" });
    }
    const order = await Order.findByIdAndRemove(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    if (Array.isArray(order.orderItems)) {
      await Promise.all(
        order.orderItems.map((orderItem) => OrderItem.findByIdAndRemove(orderItem))
      );
    }
    res.status(200).json({ success: true, message: "Order deleted" });
  })
);

module.exports = router;
