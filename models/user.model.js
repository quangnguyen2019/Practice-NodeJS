let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    avatar: String
});

let User = mongoose.model("Users", userSchema, "users");

module.exports = User;