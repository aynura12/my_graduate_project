const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
