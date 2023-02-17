const mongoose = require("mongoose");

const { Schema } = mongoose;
const becomeSchema = new Schema(
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
    address: {
      type: String,
      require: true,
    },
    date: {
        type: Number,
        require: true,
      },
      occupation: {
        type: String,
        require: true,
      },
      message: {
        type: String,
        require: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("become", becomeSchema);
