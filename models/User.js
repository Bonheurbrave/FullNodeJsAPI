const { required, boolean } = require("joi");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        minLength: [5, "email must have at least 5 characters"],
        unique: [true, "email must be unique"],
        trim: true,
    },
    password: {
        select: false,
        type: String,
        required: [true, "password is required"],
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        select: false,
    },
    verificationCodeValidation: {
        type: Number,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false
    },
},{timestamps:true});


module.exports = mongoose.model("User" , UserSchema);
