const authorize = (req, res, next) => {
  const { user } = req;
  if (["admin"].findIndex((ele) => ele === user.role) > -1) {
    next();
  } else {
    res.status(500).send("bạn đã đăng nhập nhưng không có quyền truy cập");
  }
};

module.exports = authorize;
