const {
  createComment,
  deleteComment,
} = require("../repositories/commentsRepository");

module.exports = {
  async createComment(req, res) {
    const newComment = await createComment({
      ...req.body,
      sightingId: req.params.sightingId,
    });
    res.json(newComment);
  },

  async deleteComment(req, res) {
    const { commentId } = req.params;
    const deleteResult = await deleteComment(commentId);

    if (!deleteResult) {
      const error = new Error(
        `Could not delete comment with comment ID ${commentId}`
      );
      error.status = 400;
      throw error;
    }

    res.json({ success: true });
  },
};
