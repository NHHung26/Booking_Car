const express = require('express');
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require('../controllers/station.controller');

const stationRoute = express.Router();

stationRoute.post('/stations',createStation)

stationRoute.get('/stations',getAllStation)

stationRoute.get('/stations/:id',getDetailStation)

stationRoute.put('/stations/:id',updateStation)

stationRoute.delete('/stations/:id',deleteStation)

module.exports = {
    stationRoute
}