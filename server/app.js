const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const Book = require("./models/Book");
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

app.listen(3000, () => {
  console.log("Express running...")
})

app.get('/hello-world', (req, res) => {
  res.send('Hello World')
})

app.get('/books', (req, res) => {
  Book.find({})
    .then(books => {
      res.json(books);
    })
    .catch(err =>
      console.log(err));
})

app.post('/book', (req, res) => {
  Book.create(req.body)
    .then(book => {
      res.send("Book added!");
    })
    .catch(err => console.log(err));
})

module.exports = app;