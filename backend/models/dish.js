const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name: {type:String, required: true},
    restaurant: {type:mongoose.Schema.Types.ObjectId, ref:'Restaurant', required: true},
    img: {type: String, default:''},
    price: {type:Number, required: true, min: 0},
    veg: {type:Boolean, required: true},
    prep_time: String,
    rating : {type: Number, min: 0, max: 5},
    featured: Boolean
})

dishSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

dishSchema.set('toJSON',{
    virtuals: true,
})

exports.Dish = mongoose.model('Dish', dishSchema);