const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orders:
  {
      type: String,
      // ref: "OrderItem",
      required: true,
  },
  grandTotal: { type:Number, required: true},
  overHeads: { type:Number, required: true},
  instructions: { type: String},
  status: { type: String, required: true, default: "Pending" },
  totalPrice: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  date: { type: Date, default: Date.now },
},
);

orderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderSchema.set("toJSON", {
  virtuals: true,
});

exports.Order = mongoose.model("Order", orderSchema);