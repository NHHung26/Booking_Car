const {User} = require('../models');

const createUser = async (req, res) => {
    const {name, email, numberPhone, password, role} = req.body;
    const createUser = await User.create({name, email, numberPhone, password, role})
    if(createUser) {
        res.status(201).send(createUser);
    }else {
        res.status(500).send("create False!!");
    }
}

const getInfoUserById = async(req, res) => {
    const {id} = req.params;
    const getInfoUserById = await User.findOne({
        where: {
            id: id,
        }
    })
    if(getInfoUserById) {
        res.status(201).send(getInfoUserById);
    }else {
        res.status(500).send(" False!!");
    }
}

const getAllUser = async (req, res) => {
    const getAllUser = await User.findAll()
    if(getAllUser) {
        res.status(200).send(getAllUser);
    }else {
        res.status(500).send("False!!");
    }
}

const updateUserById = async (req, res) => {
    const {id} = req.params;
    const {name, email, numberPhone, password, role} = req.body;
    const updateUserById = await User.update({name, email, numberPhone, password, role}, {
        where: {
            id: id
        }
    })
    if(updateUserById) {
        res.status(200).send(updateUserById);
    }else {
        res.status(500).send(" False!!");
    }
}

const deleteUserById = async (req, res) => {
    try {
        const {id} = req.params;
    const deleteUserById = await User.destroy({
        where: {
            id: id
        }
    })
    
        res.status(200).send("deleteUserById");
    
    } catch (error) {
       console.log(error)
       res.status(500).send("false")
    }
}

module.exports = {
    createUser,
    getInfoUserById,
    getAllUser,
    updateUserById,
    deleteUserById
}