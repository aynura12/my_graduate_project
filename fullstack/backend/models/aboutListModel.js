const mongoose = require("mongoose");

const { Schema } = mongoose;
const aboutListSchema = new Schema(
  {
    country: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("aboutList", aboutListSchema);
