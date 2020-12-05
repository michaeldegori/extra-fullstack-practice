const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
// const books = require("./books.json");
const MONGODB_URI = "mongodb://localhost/fullstack-practice";
const bodyParser = require("body-parser");

app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.listen(3000, () => {
  console.log("Express running...")
})

module.exports = app;