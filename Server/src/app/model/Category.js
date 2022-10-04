const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema(
  {
    title: { type: String, maxLength: 255, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category);
