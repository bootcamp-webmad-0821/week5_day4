const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  year: Number,
  cover: String,
  originalCover: String
}, {
  timestamps: true
})

const Movie = model("Movie", movieSchema);

module.exports = Movie