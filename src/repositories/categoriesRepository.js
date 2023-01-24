const { category } = require("../db/models");
module.exports = {
  getAllCategories() {
    return category.findAll();
  },

  createCategory(payload) {
    return category.create(payload);
  },
};
