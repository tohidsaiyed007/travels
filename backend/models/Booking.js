
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  from: String,

  to: String,

  name: String,

  phone: String,

  passengers: Number,

  screenshot: String,

  bookingDate: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);