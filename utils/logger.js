const bunyan = require("bunyan");
const path = require("path");

const appLoggerFilePath = path.join(__dirname, "..", "logs", "app.log");

const appLogger = bunyan.createLogger({
  name: "CGCLOGS",
  streams: [{ path: appLoggerFilePath }],
});

module.exports = { appLogger };
