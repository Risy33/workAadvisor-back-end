"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "experiences",
      [
        {
          title: "Title",
          description: "description of the work review",
          rating: 3,
          useful: 1,
          status: "positive",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 5,
          userId: 5,
        },
        {
          title: "Title number 2",
          description: "description of the work review number 2",
          rating: 2,
          useful: 0,
          status: "positive",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 3,
          userId: 6,
        },
        {
          title: "Title number 3",
          description: "description of the work review number 3",
          rating: 2,
          useful: 0,
          status: "positive",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 6,
          userId: 5,
        },
        {
          title: "Title number 4",
          description: "description of the work review number 4",
          rating: 2,
          useful: 5,
          status: "positive",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 3,
          userId: 4,
          
        },
        {
          title: "Title number 2",
          description: "description of the work review number 2",
          rating: 5,
          useful: 8,
          status: "positive",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 9,
          userId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};
