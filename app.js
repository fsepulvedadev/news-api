const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const News = require("./models/News");
const db = config.get("mongoURI");

mongoose
  .connect(db, {})
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => console.log(error));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  News.find()
    .sort({ date: -1 })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => console.error(err));
});

// Borrar un Registro

const newNews = new News({
  title: "Gano boca por libertadores",
  content:
    "lorem asddasdsasdasdaasdsafsa asf as saf aa sfafsasff as faf asfafasfasfsa fas fasf fsas afasf",
  imageURL: "www.google.com.ar",
  author: "Francisco Sepulveda",
});
/* newNews
  .save()
  .then((item) => console.log(item))
  .catch((err) => console.log(err));

News.find()
  .sort({ date: -1 })
  .then((items) => console.log(items));

News.findOneAndUpdate(
  { _id: "6310f4037b6c381a6702a2ba" },
  { content: "Aguante bokita" }
).then((item) => console.log("Actualizando", item));
 */
