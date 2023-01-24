const { sighting, comment, like, category } = require("../db/models");

module.exports = {
  getAllSightings(options) {
    return sighting.findAll(options);
  },
  getSightingByReportNumber(reportNumber) {
    const options = {
      include: [{ model: comment }, { model: like }, { model: category }],
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
  async updateSightingByReportNumber(reportNumber, payload) {
    const updatedSighting = await sighting.update(
      { ...payload, updated_at: new Date() },
      // the model is returned when returning:true is specified
      { where: { reportNumber }, returning: true }
    );
    // eslint-disable-next-line no-unused-vars
    const [_, [updatedSightingResult]] = updatedSighting;

    if (payload.categories) {
      await updatedSightingResult.setCategories(payload.categories);
    }

    return updatedSightingResult;
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
