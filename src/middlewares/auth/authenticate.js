const jwt = require("jsonwebtoken");
const authencation = (req, res, next) => {
  try {
    const token = req.header("token");
    const decode = jwt.verify(token, "huyhung26082002");
    console.log(decode);
    if (decode) {
      req.user = decode;
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = authencation;
