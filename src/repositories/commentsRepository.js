const { comment } = require("../db/models");

module.exports = {
  async createComment(payload) {
    const currentDate = new Date();

    return comment.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });
  },

  deleteComment(commentId) {
    return comment.destroy({
      where: {
        id: commentId,
      },
    });
  },
};
