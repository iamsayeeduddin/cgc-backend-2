const http = require("http");

const reqHandler = (req, res) => {
  console.log("Req Reached the server.");
  console.log(req.url, req.method);
  console.log(req);
  res.end("Welcome to Node JS!");
};

const server = http.createServer(reqHandler);

server.listen(5000);
