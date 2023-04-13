const express = require('express')

const {createCompanies, allCompanies, getInfoDetailCompanies, updateCompanies, deleteCompanies} = require('../controllers/companies.controller') 
const { Model } = require('sequelize')
const { updateStation } = require('../controllers/station.controller')

const companiesRoute = express.Router()

companiesRoute.post('/companies', createCompanies)

companiesRoute.get('/companies', allCompanies)

companiesRoute.get('/companies/:id', getInfoDetailCompanies)

companiesRoute.put('/companies/:id', updateCompanies)

companiesRoute.delete('/companies/:id', deleteCompanies)

module.exports = {
    companiesRoute
}