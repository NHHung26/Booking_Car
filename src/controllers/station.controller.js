const {Station} = require('../models');
const createStation = async (req, res) => {
    const {name, address, province} = req.body;
    const newStation = await Station.create({name, address, province})
    res.status(201).send(newStation);
}

module.exports = {
    createStation,
}   