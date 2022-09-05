const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },
  content: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  author: {
    type: String,
  },
});

module.exports = Item = mongoose.model("News", newsSchema);
