const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  email: { type:String, required: true},
  passwordHash: { type:String, required: true},
  name: { type: String, required: true },
  address: { type: String, required: true },
  img: { type: String, default: "" },
  orders: { type: Array, default: [] },
  history: { type: Array, default: [] },
  open_time: { type: String, required: true },
  close_time: { type: String, required: true },
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
  upi: { type: String, required: true },
});

restaurantSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

restaurantSchema.set('toJSON',{
  virtuals: true,
})

exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
