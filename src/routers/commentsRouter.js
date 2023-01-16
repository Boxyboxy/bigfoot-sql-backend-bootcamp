const express = require("express");

const commentsController = require("../controllers/commentsController");
require("express-async-errors");

const commentsRouter = express.Router();

commentsRouter.post("/:sightingId", commentsController.createComment);

// DELETE /comments/:commentId
commentsRouter.delete("/:commentId", commentsController.deleteComment);

commentsRouter.patch("/:commentId", commentsController.updateComment);

module.exports = commentsRouter;
