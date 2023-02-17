const mongoose = require("mongoose");

const { Schema } = mongoose;
const donateSchema = new Schema(
  {
    money: {
      type: Number,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    number: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    cardNumber: {
      type: Number,
      require: true,
    },
    mm: {
      type: Number,
      require: true,
    },
    cvc: {
      type: Number,
      require: true,
    },
    billingAddress: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("donate", donateSchema);
