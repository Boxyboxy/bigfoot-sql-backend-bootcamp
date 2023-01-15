const {
  getAllSightings,
  getSightingByReportNumber,
  updateSightingByReportNumber,
  createSighting,
  deleteSighting,
} = require("../repositories/sightingsRepository");

const { SORT_ORDER_HASHMAP } = require("./constants");

module.exports = {
  async getAllSightings({ query }, res) {
    const { year, sort } = query;

    const options = {
      where: {},
      order: [],
    };

    if (year) options.where.year = year;
    if (sort) {
      const [property, order] = sort.split(":");

      if (SORT_ORDER_HASHMAP[order]) {
        options.order.push([property, SORT_ORDER_HASHMAP[order]]);
      }
    }

    const sightings = await getAllSightings(options);

    return res.json(sightings);
  },

  async getOneSightingByReportNumber(req, res) {
    const { reportNumber } = req.params;
    // +reportNumber converts a string to number
    if (
      isNaN(reportNumber) ||
      +reportNumber > Number.MAX_SAFE_INTEGER ||
      +reportNumber < 0
    ) {
      const error = new Error("Report number must be a valid number");
      error.status = 400;
      throw error;
    }

    const sighting = await getSightingByReportNumber(reportNumber);

    if (!sighting) {
      const error = new Error(
        `Could not find sighting with report number ${reportNumber}`
      );
      error.status = 400;
      throw error;
    }

    return res.json(sighting);
  },
  async updateSightingByReportNumber(req, res) {
    const { reportNumber } = req.params;

    const [updatedRows] = await updateSightingByReportNumber(
      reportNumber,
      req.body
    );

    if (!updatedRows) {
      const error = new Error(
        `Could not find sighting with report number ${reportNumber}`
      );
      error.status = 400;
      throw error;
    }

    return res.json({ success: true });
  },

  async createSighting(req, res) {
    const { reportNumber } = req.params;
    const existingSighting = await getSightingByReportNumber(
      req.params.reportNumber
    );

    if (existingSighting) {
      const error = new Error(
        `Sighting with report number ${reportNumber} already exists`
      );
      error.status = 400;
      throw error;
    }

    const newSighting = await createSighting({ ...req.body, reportNumber });
    return res.json(newSighting);
  },

  async deleteSighting(req, res) {
    const { reportNumber } = req.params;

    const deleteResult = await deleteSighting(req.params.reportNumber);

    if (!deleteResult) {
      const error = new Error(
        `COuld not delete sighting with report number ${reportNumber}`
      );
      error.status = 400;
      throw error;
    }
    return res.json(deleteResult);
  },
};
