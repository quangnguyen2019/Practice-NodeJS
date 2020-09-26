let mongoose = require("mongoose");

let SessionSchema = new mongoose.Schema({
    cart: Object
});

let Session = mongoose.model("Session", SessionSchema, "sessions");

module.exports = Session;