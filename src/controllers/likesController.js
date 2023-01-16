const { createLike, deleteLike } = require("../repositories/likesRepository");

module.exports = {
  async createLike(req, res) {
    const { sightingId } = req.params;
    const newLike = await createLike({
      sightingId: sightingId,
    });
    res.json(newLike);
  },

  async deleteLike(req, res) {
    const { likeId } = req.params;
    const deleteResult = await deleteLike(likeId);

    if (!deleteResult) {
      const error = new Error(`Could not delete like with ID ${likeId}`);
      error.status = 400;
      throw error;
    }

    res.json({ success: true });
  },
};
