const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true
  // },
  // restaurant: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },
  // img: {
  //   type: String
  // }
});

exports.OrderItem = mongoose.model("OrderItem", orderItemSchema);
