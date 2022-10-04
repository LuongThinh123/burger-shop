const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  title: { type: String, maxLength: 255, required: true },
  description: { type: String, maxLength: 600 },
  firstWord: { type: String, required: true },
  price: { type: Number, required: true },
  sale: { type: Number, required: true },
  image: { type: String, maxLength: 255, default: "" },
  categoryId: { type: mongoose.ObjectId },
  slug: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", Product);
