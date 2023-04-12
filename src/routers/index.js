const express = require('express');
const {stationRoute} = require('../controllers/station.controller')

const rootRoute = express.Router();

rootRoute.post('/stations',() =>{
    stationRoute
})

module.exports = {
    rootRoute,
}