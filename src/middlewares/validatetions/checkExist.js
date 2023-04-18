const { Station, User } = require("../../models");

const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const station = await Model.findOne({
      where: {
        id,
      },
    });
    if (station) {
      next();
    } else {
      if (Model == Station) {
        res.status(404).send(`Không có station có id là ${id}`);
      } else if (Model == User) {
        res.status(404).send(`Không có user có id là ${id}`);
      }
    }
  };
};

module.exports = {
  checkExist,
};
