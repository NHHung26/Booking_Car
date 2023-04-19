const express = require("express");
const multer = require("multer");
const {
  register,
  getInfoUserById,
  getAllUser,
  updateUserById,
  deleteUserById,
  loggin,
} = require("../controllers/user.controller");
const { checkExist } = require("../middlewares/validatetions/checkExist");
const { User } = require("../models");
const authorize = require("../middlewares/auth/authorize");
const authentication = require("../middlewares/auth/authenticate");
const authencation = require("../middlewares/auth/authenticate");
const userRoute = express.Router();

userRoute.post("/register", register);

userRoute.get("/:id", authencation, authorize, getInfoUserById);

userRoute.get("/", authencation, authorize, getAllUser);

userRoute.put(
  "/:id",
  checkExist(User),
  authencation,
  authorize,
  updateUserById
);

userRoute.delete(
  "/:id",
  checkExist(User),
  authencation,
  authorize,
  deleteUserById
);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/image");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const extensionImageLIst = [".png", ".jpg"];
    const extension = file.originalname.slice(-4);
    const check = extensionImageLIst.includes(extension);
    if (check) {
      cb(null, true);
    } else {
      cb(new Error("extension không hợp lệ"));
    }
  },
});
userRoute.post("/upload-image", upload.single("avatar"), (req, res) => {
  res.send(200).send("tính năng file upload run");
});
userRoute.post("/loggin", loggin);
module.exports = {
  userRoute,
};
