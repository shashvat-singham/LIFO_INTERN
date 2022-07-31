const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required: true},
    email: String,
    phone: {type:String, required: true, minlength: 10, maxlength: 10},
    passwordHash: {type:String, required: true},
    user_type: {type:Number, default: 1},
    orders: {type:Array, default: []}
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON',{
    virtuals: true,
})

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;