const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: Number,
  expDate: { type: Date, required: true }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
