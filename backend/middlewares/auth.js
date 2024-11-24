const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "JWT_SECRET");
    const userId = decodedToken.userId;
    req.auth = { userId };

    if (req.body.userId && req.body.userId !== userId) {
      res.status(403).json({
        message: "You don't have permission to perform this action!",
      });
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      message: "You are not authorized to access this resource!",
    });
  }
};
