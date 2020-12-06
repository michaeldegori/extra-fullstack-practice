const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  image_url: String,
  title: String,
  description: String,
  author: Schema.Types.ObjectId,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  _v: Number
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;