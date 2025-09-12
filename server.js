const express = require("express");
const bookRouter = require("./router/bookRouter");

const app = express();

app.listen(5000, () => console.log("Server is Up & Running!"));

app.use("/books", bookRouter);

// NGINX - api.cgc.in -> localhost:5000
// cgc.in -> localhost:4173
// Cloudflare
// api.cgc.in/
// Layered Architecture System
// App -> Router -> Controller -> Models (DB Queries)
