const { createComment } = require("../repositories/commentsRepository");

module.exports = {
  async createComment(req, res) {
    const newComment = await createComment({
      ...req.body,
      sightingId: req.params.sightingId,
    });
    res.json(newComment);
  },
};
