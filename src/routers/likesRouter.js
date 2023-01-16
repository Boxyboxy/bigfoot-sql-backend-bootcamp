const express = require("express");

const likesController = require("../controllers/likesController");
require("express-async-errors");

const likesRouter = express.Router();

likesRouter.post("/:sightingId", likesController.createLike);

// DELETE /likes/:commentId
likesRouter.delete("/:likeId", likesController.deleteLike);

module.exports = likesRouter;
