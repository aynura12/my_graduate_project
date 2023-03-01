const mongoose = require("mongoose");

const { Schema } = mongoose;
const eventSchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
    day: {
      type: Number,
      require: true,
    },
    month: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    watch: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    requirements: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    website: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
