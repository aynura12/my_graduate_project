const mongoose = require("mongoose");

const { Schema } = mongoose;
const newsSchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    detailText: {
      type: String,
      require: true,
    },
    detailImage: {
      type: String,
      require: true,
    },
    detailTitle: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("news", newsSchema);
