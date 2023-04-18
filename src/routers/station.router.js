const express = require("express");
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const { checkExist } = require("../middlewares/validatetions/checkExist");
const { Station } = require("../models");
const { authencation } = require("../middlewares/auth/authenticate");

const stationRoute = express.Router();

stationRoute.post("/stations", authencation, createStation);

stationRoute.get("/stations", getAllStation);

stationRoute.get("/stations/:id", getDetailStation);

stationRoute.put("/stations/:id", checkExist(Station), updateStation);

stationRoute.delete("/stations/:id", checkExist(Station), deleteStation);

module.exports = {
  stationRoute,
};
