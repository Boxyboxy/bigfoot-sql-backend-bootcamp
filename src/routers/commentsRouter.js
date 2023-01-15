const express = require("express");

const commentsController = require("../controllers/commentsController");
require("express-async-errors");

const commentsRouter = express.Router();

commentsRouter.post("/:sightingId", commentsController.createComment);

module.exports = commentsRouter;
