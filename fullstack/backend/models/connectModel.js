const mongoose = require("mongoose");

const { Schema } = mongoose;
const connectSchema = new Schema(
  {
    fullName: {
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
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("connect", connectSchema);
