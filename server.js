const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./router/bookRouter");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
const { verifyToken } = require("./utils/crypt");

const app = express();

app.listen(5000, () => console.log("Server is Up & Running!"));

mongoose
  .connect(process.env.MONGODB_URL, { autoIndex: true })
  .then(() => console.log("Connected to the DB Successfully!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
  try {
    if (req.url.includes("login")) {
      next();
    } else if (req.headers.authorization) {
      console.log(req.headers.authorization?.split(" "));
      const token = req.headers.authorization?.split(" ")[1];
      const validToken = verifyToken(token);
      if (validToken) {
        next();
      }
    } else res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (error) {
    res.status(401).json({ success: false, message: "Token Expired" });
  }
});

app.use("/products", productRouter);
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
