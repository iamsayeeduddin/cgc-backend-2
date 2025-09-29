const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./router/bookRouter");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
const { auth } = require("./middleware/auth");

const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.listen(5000, () => console.log("Server is Up & Running!"));

mongoose
  .connect(process.env.MONGODB_URL, { autoIndex: true })
  .then(() => console.log("Connected to the DB Successfully!"))
  .catch((err) => console.log(err));

app.use(express.json());

const logsDir = path.join(__dirname, "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const reqLogFilePath = path.join(__dirname, "logs", "request.log");
const reqLogStream = fs.createWriteStream(reqLogFilePath, { flags: "a" });

app.use(morgan("tiny", { stream: reqLogStream }));

app.use("/products", auth, productRouter);
app.use("/books", bookRouter);
app.use("/users", userRouter);

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

// LOGGING
// APP
// REQUEST
