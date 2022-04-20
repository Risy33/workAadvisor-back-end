"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "experiences",
      [
        {
          title: "Title",
          description:
            "'m not the best at expressing my feelings, but... I hope you can love me the way I love you.",
          rating: 3,
          useful: 1,
          status: "positive",
          image:
            "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 5,
          userId: 2,
        },
        {
          title: "Title number 2",
          description:
            "Zoe is a teenage girl convicted of a murder she didn't commit, but that doesn't matter in the Arena of Justice. You either win your fights, or you die. ...",
          rating: 2,
          useful: 0,
          status: "positive",
          image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 3,
          userId: 1,
        },
        {
          title: "Title number 3",
          description:
            "You remind me of the ocean..'' ''Is it because I'm deep and mysterious?'' he asks. ''No, because you're salty and scare the shit out of people'",
          rating: 2,
          useful: 0,
          status: "positive",
          image:
            "https://my.pocketmenu.nl/uploads/images/websites/restaurant-johannes/original/johannes2024.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 6,
          userId: 2,
        },
        {
          title: "Title number 4",
          description:
            "Highest rank on Wattpad: #7 in Quaterbacks #1 in goodgirl #4 in highschoolromance #9 in romance #1 in romcom Everly Gray, a seventeen years old teenager whose life is...",
          rating: 2,
          useful: 5,
          status: "positive",
          image:
            "https://restaurant-kronenburg.nl/wp-content/uploads/2020/01/4o7a9492_home_top-2048x1365.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 3,
          userId: 1,
        },
        {
          title: "Title number 5",
          description:
            "Miriam Abby Priya Mei Tyler Devon tae young Robaire is added now! So is Jesse lmao that's all I'm doing so far and no smut cause they are PRETEENS in a DISNEY MOVIE than...",
          rating: 5,
          useful: 8,
          status: "positive",
          image:
            "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 9,
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};
