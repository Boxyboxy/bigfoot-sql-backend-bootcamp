const {
  getAllCategories,
  createCategory,
} = require("../repositories/categoriesRepository");

module.exports = {
  async getAllCategories(req, res) {
    const categories = await getAllCategories();
    return res.json(categories);
  },

  async createCategory(req, res) {
    const newCategory = await createCategory(req.body);
    return res.json(newCategory);
  },
};
