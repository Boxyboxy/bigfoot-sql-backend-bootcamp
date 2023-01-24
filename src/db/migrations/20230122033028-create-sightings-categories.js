"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("sightings_categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sighting_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sightings",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
        // foreign key constraint
        onDelete: "CASCADE",
      },
      created_at: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("sightings_categories");
  },
};
