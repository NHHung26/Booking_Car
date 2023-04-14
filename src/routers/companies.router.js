const express = require('express')

const {createCompanies,  getInfoDetailCompanies, updateCompanies, deleteCompanies, getAllCompanies} = require('../controllers/companies.controller') 
const { Model } = require('sequelize')
const { updateStation } = require('../controllers/station.controller')

const companiesRoute = express.Router()

companiesRoute.post('/companies', createCompanies)

companiesRoute.get('/companies', getAllCompanies)

companiesRoute.get('/companies/:id', getInfoDetailCompanies)

companiesRoute.put('/companies/:id', updateCompanies)

companiesRoute.delete('/companies/:id', deleteCompanies)

module.exports = {
    companiesRoute
}