const { Station } = require("../models");
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  const newStation = await Station.create({ name, address, province });
  res.status(201).send(newStation);
};

const getAllStation = async (req, res) => {
  const station = await Station.findAll();
  if (station) {
    res.status(200).send(station);
  } else {
    res.status(500).send("Not Found!!!");
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  const detaitStation = await Station.findOne({
    where: {
      id: id,
    },
  });
  if (detaitStation) {
    res.status(200).send(detaitStation);
  } else {
    res.status(500).send(detaitStation);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  const updateStation = await Station.update(
    { name, address, province },
    {
      where: {
        id: id,
      },
    }
  );
  if (updateStation) {
    res.status(200).send("update ok");
  } else {
    res.status(500).send("update false");
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  const deleteStation = await Station.destroy({
    where: {
      id: id,
    },
  });
  if (deleteStation) {
    res.status(200).send("delete ok");
  } else {
    res.status(500).send("delete false");
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
