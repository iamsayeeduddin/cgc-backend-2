const express = require("express");

const app = express();

app.listen(5000, () => console.log("Server is Up & Running!"));

app.post("/books", (req, res) => {
  res.status(200);
  res.json(books);
});

app.use("/", (req, res) => {
  res.status(200);
  res.send("Welcome to Express JS");
});

let books = [
  {
    id: 1,
    name: "HTML & CSS",
    price: 250,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 400,
  },
  {
    id: 3,
    name: "Backend with Node & Express JS",
    price: 600,
  },
];
