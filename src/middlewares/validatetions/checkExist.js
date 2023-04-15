
const {Station} = require('../../models') 

const checkExist = (Model) => {
    return async (req, res, next) => {
        const {id} = req.params;
        const station = await Station.findOne({
            where: {
                id,
            }
        })
        if(station){
            next()
        }
        else{
            res.status(404).send(`Không có station nào có id là ${id}`)
        }
    }
}

module.exports = {
    checkExist
}