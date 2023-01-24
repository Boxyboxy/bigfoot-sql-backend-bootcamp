"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("categories", [
      { name: "Forest" },
      { name: "Mountain" },
      { name: "Volcano" },
    ]);
  },

  // async down(queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // },
};
