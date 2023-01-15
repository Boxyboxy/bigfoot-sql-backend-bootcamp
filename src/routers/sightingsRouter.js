const express = require("express");

const sightingsController = require("../controllers/sightingsController");
require("express-async-errors");

const sightingsRouter = express.Router();

sightingsRouter.get("/", sightingsController.getAllSightings);
sightingsRouter.get(
  "/:reportNumber",
  sightingsController.getOneSightingByReportNumber
);
sightingsRouter.patch(
  "/:reportNumber",
  sightingsController.updateSightingByReportNumber
);
sightingsRouter.post("/:reportNumber", sightingsController.createSighting);
sightingsRouter.delete("/:reportNumber", sightingsController.deleteSighting);

module.exports = sightingsRouter;
