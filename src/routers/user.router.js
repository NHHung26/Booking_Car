const express = require('express')
const {register, getInfoUserById,  getAllUser, updateUserById, deleteUserById} = require('../controllers/user.controller');
const { checkExist } = require('../middlewares/validatetions/checkExist');
const {User} = require('../models')

const userRoute = express.Router();

userRoute.post('/user',register)

userRoute.get('/user/:id',getInfoUserById)

userRoute.get('/user',getAllUser)

userRoute.put('/user/:id',checkExist(User),updateUserById)

userRoute.delete('/user/:id',checkExist(User),deleteUserById)

module.exports = {
    userRoute
}
