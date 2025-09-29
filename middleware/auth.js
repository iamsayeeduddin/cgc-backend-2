const { verifyToken } = require("../utils/crypt.js");
const { appLogger } = require("../utils/logger.js");

const auth = (req, res, next) => {
  try {
    if (req.url.includes("login")) {
      appLogger.info("User Routed login");
      next();
    } else if (req.headers.authorization) {
      const token = req.headers.authorization?.split(" ")[1];
      const validToken = verifyToken(token);
      if (validToken) {
        req.decodedToken = validToken;
        appLogger.info("User Authenticated");
        next();
      }
    } else res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (error) {
    appLogger.info({ success: false, message: "Token Expired" });
    res.status(401).json({ success: false, message: "Token Expired" });
  }
};

const isAdmin = (req, res, next) => {
  try {
    let decodedToken = req.decodedToken;
    if (decodedToken.role === "ADMIN") {
      next();
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = {
  auth,
  isAdmin,
};
