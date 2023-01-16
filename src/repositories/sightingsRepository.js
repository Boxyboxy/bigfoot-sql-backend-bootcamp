const { sighting, comment, like, Sequelize } = require("../db/models");

module.exports = {
  getAllSightings(options) {
    return sighting.findAll(options);
  },
  getSightingByReportNumber(reportNumber) {
    const options = {
      include: [{ model: comment }, { model: like }],
      order: [[comment, "createdAt", "DESC"]],
      // attributes: {
      //   include: [
      //     [Sequelize.fn("COUNT", Sequelize.col("likes.id")), "likesCount"],
      //   ],
      // },
      // group: ["like.id"],
    };
    if (reportNumber) options.where = { reportNumber };
    return sighting.findOne(options);
  },
  updateSightingByReportNumber(reportNumber, payload) {
    return sighting.update(
      { ...payload, updated_at: new Date() },
      { where: { reportNumber } }
    );
  },
  async createSighting(payload) {
    const currentDate = new Date();

    return sighting.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });
  },
  deleteSighting(reportNumber) {
    return sighting.destroy({
      where: { reportNumber: reportNumber },
    });
  },
};
