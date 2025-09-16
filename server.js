const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./router/bookRouter");
const productRouter = require("./router/productRouter");

const app = express();

app.listen(5000, () => console.log("Server is Up & Running!"));

mongoose
  .connect("mongodb://localhost:27017/cgc2")
  .then(() => console.log("COnnected to the DB Successfully!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/products", productRouter);
app.use("/books", bookRouter);

// NGINX - api.cgc.in -> localhost:5000
// cgc.in -> localhost:4173
// Cloudflare
// api.cgc.in/
// Layered Architecture System
// App -> Router -> Controller -> Models (DB Queries)
// MongoDB - DB - JSON Based Document Structure - Semi Structured DB
// NoSQL - Collections and Documents
// Schema - Structure - Not Mandatory NoSQL
// UI -> BACKEND -> DB (Software Server) 27017
// DRIVERS -> mongoose
