const { category } = require("../db/models");
module.exports = {
  getAllCategories() {
    return category.findAll();
  },
};
