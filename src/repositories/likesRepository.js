const { like } = require("../db/models");

module.exports = {
  async createLike(payload) {
    const currentDate = new Date();

    return like.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });
  },

  deleteLike(likeId) {
    return like.destroy({
      where: {
        id: likeId,
      },
    });
  },
};
