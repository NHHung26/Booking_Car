const express = require('express')
const {createUser, getInfoUserById,  getAllUser, updateUserById, deleteUserById} = require('../controllers/user.controller')

const userRoute = express.Router();

userRoute.post('/user',createUser)

userRoute.get('/user/:id',getInfoUserById)

userRoute.get('/user',getAllUser)

userRoute.put('/user/:id',updateUserById)

userRoute.delete('/user/:id',deleteUserById)

module.exports = {
    userRoute
}
