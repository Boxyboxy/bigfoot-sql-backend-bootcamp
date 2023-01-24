const { getAllCategories } = require("../repositories/categoriesRepository");

module.exports = {
  async getAllCategories(req, res) {
    const categories = await getAllCategories();
    return res.json(categories);
  },
};
