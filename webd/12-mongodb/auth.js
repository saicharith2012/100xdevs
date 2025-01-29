const jwt = require("jsonwebtoken");

JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.headers.authorization;
  const decodedInfo = jwt.verify(token, JWT_SECRET);

  if (!decodedInfo) {
    res.status(403).json({
      message: "Unauthorized. Invalid token.",
    });

    return;
  }

  req.id = decodedInfo._id;

  next();
}

module.exports = {
  auth,
};
