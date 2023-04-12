const express = require('express');
const {createStation} = require('../controllers/station.controller');

const stationRoute = express.Router();

stationRoute.post('/', ()=>{
    createStations
})

module.exports = {
    stationRoute
}