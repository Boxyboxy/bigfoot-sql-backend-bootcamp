const express = require("express");

const categoriesController = require("../controllers/categoriesController");
require("express-async-errors");

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.post("/", categoriesController.createCategory);

module.exports = categoriesRouter;
