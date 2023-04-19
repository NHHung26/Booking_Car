const { Station, User } = require("../../models");

const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const check = await Model.findOne({
      where: {
        id,
      },
    });
    if (check) {
      next();
    } else {
      if (Model == Station) {
        res.status(500).send(` Không có station nào có id là ${id}`);
      } else if (Model == User) {
        res.status(500).send(` Không có user nào có id là ${id}`);
      }
    }
  };
};

module.exports = {
  checkExist,
};
