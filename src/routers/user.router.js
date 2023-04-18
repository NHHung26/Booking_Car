const express = require("express");
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

const userRoute = express.Router();

userRoute.post("/register", register);

userRoute.get("/:id", getInfoUserById);

userRoute.get("/", getAllUser);

userRoute.put("/:id", checkExist(User), updateUserById);

userRoute.delete("/:id", checkExist(User), deleteUserById);

userRoute.post("/loggin", loggin);
module.exports = {
  userRoute,
};
