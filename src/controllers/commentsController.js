const {
  createComment,
  deleteComment,
  updateComment,
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

  async updateComment(req, res) {
    const { commentId } = req.params;
    const updateResult = await updateComment(commentId, req.body);

    if (!updateResult) {
      const error = new Error(
        `Could not update comment with comment ID ${commentId}`
      );
      error.status = 400;
      throw error;
    }
    res.json({ success: true });
  },
};
