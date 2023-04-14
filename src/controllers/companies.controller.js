const {Companies} = require('../models');

const createCompanies = async (req, res) => {
    const {name, image} = req.body;
    const createCompanies = await Companies.create({name, image})
    if(createCompanies) {
        res.status(201).send(createCompanies)
    }else{
        res.status(500).send("createCompanies false")
    }
}

const getAllCompanies = async (req, res) => {
    
    const getAllCompanies = await Companies.findAll()
    if(getAllCompanies) {
        res.status(200).send(getAllCompanies)
    }else{
        res.status(500).send("false")
    }
}

const getInfoDetailCompanies = async (req, res) => {
    const { id } = req.params;
    const getInfoDetailCompanies = await Companies.findOne({
        where: {
            id: id,
        }
    })
    if(getInfoDetailCompanies) {
        res.status(200).send(getInfoDetailCompanies)
    }else{
        res.status(500).send("false")
    }
}

const updateCompanies = async (req, res) => {
    const {id} = req.params;
    const {name, image} = req.body;
    const updateCompanies = await Companies.update({name, image},{
        where: {
            id: id
        }
    })
    if(updateCompanies) {
        res.status(200).send("updateCompanies")
    }else{
        res.status(500).send("false")
    }
}

const deleteCompanies = async (req, res) => {
    const {id} = req.params;
    const deleteCompanies = await Companies.destroy({
        where: {
            id: id
        }
    })
    if(deleteCompanies) {
        res.status(200).send("deleted")
    }else{
        res.status(500).send("false")
    }
}

module.exports = {
    createCompanies,
    getAllCompanies,
    getInfoDetailCompanies,
    updateCompanies,
    deleteCompanies
}