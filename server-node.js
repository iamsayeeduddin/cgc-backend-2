const http = require("http");

const reqHandler = (req, res) => {
  console.log("Req Reached the server.");
  console.log(req.url, req.method);
  console.log(req);
  res.end("Welcome to Node JS!");
};

const server = http.createServer(reqHandler);

server.listen(5000);

// REST API's
// API METHODS - HTTP METHODS - HTTP ACTION VERBS
// GET - Fetch Data - Reading The Data
// POST - Create Data - Sending The Data
// PUT & PATCH - Updating the Data - Send & Update the Data
// DELETE - Deleting the Data
