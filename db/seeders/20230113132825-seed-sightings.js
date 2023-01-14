"use strict";
const sightings = require("../sightings.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const currentDate = new Date();

    return queryInterface.bulkInsert(
      "sightings",
      sightings.map(({ YEAR, MONTH, DATE, OBSERVED, REPORT_NUMBER }) => ({
        year: YEAR,
        month: MONTH,
        date: DATE,
        observed: OBSERVED,
        report_number: REPORT_NUMBER,
        created_at: currentDate,
        updated_at: currentDate,
      }))
    );
  },
};
