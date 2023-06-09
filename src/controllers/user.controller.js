const { User } = require("../models");
const bcrypt = require("bcrypt");
const { create } = require("express-handlebars");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, numberPhone, password, role } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  const createUser = await User.create({
    name,
    email,
    numberPhone,
    password: hashPassword,
    role,
  });
  if (createUser) {
    res.status(201).send(createUser);
  } else {
    res.status(500).send("Tạo thất bại");
  }
};

const getInfoUserById = async (req, res) => {
  const { id } = req.params;
  const getInfoUserById = await User.findOne({
    where: {
      id: id,
    },
  });
  if (getInfoUserById) {
    res.status(201).send(getInfoUserById);
  } else {
    res.status(500).send(" False!!");
  }
};

const getAllUser = async (req, res) => {
  const getAllUser = await User.findAll();
  if (getAllUser) {
    res.status(200).send(getAllUser);
  } else {
    res.status(500).send("False!!");
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, email, numberPhone, password, role } = req.body;
  const updateUserById = await User.update(
    { name, email, numberPhone, password, role },
    {
      where: {
        id: id,
      },
    }
  );
  if (updateUserById) {
    res.status(200).send(updateUserById);
  } else {
    res.status(500).send(" False!!");
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUserById = await User.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("deleteUserById");
  } catch (error) {
    console.log(error);
    res.status(500).send("false");
  }
};

const loggin = async (req, res) => {
  const { email, password } = req.body;
  const loggin = await User.findOne({
    where: {
      email,
    },
  });
  if (loggin) {
    const isAuth = bcrypt.compareSync(password, loggin.password);
    console.log(isAuth);
    if (isAuth) {
      const token = jwt.sign({ email, role: loggin.role }, "huyhung26082002", {
        expiresIn: "1h",
      });
      res.status(200).send({ message: "đăng nhập thành công", token: token });
    } else {
      res
        .status(500)
        .send({ message: "sai tên đăng nhập hoặc mật khẩu", token: token });
    }
  } else {
    res.status(404).send({ message: "email không tồn tại" });
  }
};
module.exports = {
  register,
  getInfoUserById,
  getAllUser,
  updateUserById,
  deleteUserById,
  loggin,
};
