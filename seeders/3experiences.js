"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "experiences",
      [
        {
          title: "Dream Place",
          description:
            "A perfect place to work if you are looking for a small Restaurant and with only few tables. Situated in the heart of Amsterdam this place gets a lot of internationals guest and a lot of dutch people,good if you want to practice the language. The Owner of the place is 100% proud Italian and he also is a sommelier,perfect if you are willing to learn the italian wine world. The restaurant is small but it can get very very busy in a short amount of time so to work there you will need to manage the pressure if you are a chef or a waiter.",

          useful: 1,
          status: "Checked",
          image:
            "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
          createdAt: new Date(),
          updatedAt: new Date(),
          workPlaceId: 5,
          userId: 2,
        },
        {
          title: "Just wonderful!",
          description:
            "The management of this place is amazing! From the Front Office,House Cleaaning, to the Food & Beverage,eveybody is very friendly and willing to help you in case you don't know something. Can get very busy but the atmosphere stays relaxed.",

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
          title: "Perfect place to start your carrear!",
          description:
            "I remember when I first start in this place I did not know anything about waitering,I had to start from the basic and I ended up to be know everything I could learn about service,wines,hospitality,food etc. This all thank to the beutiful people who work there!",

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
          title: "Summer in the terrace",
          description:
            "I spent the all summer working on the beutiful terrace of this hotel,Crazy!! the guests demand too much from a very small amout of staff but at the end of the day every month the tips were so good( almost another salary).",

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
          title: "Nice but not perfect",
          description:
            "This place is one the busiest place I ever worked for! To work here you need to handle with any type of tourist so can be nice but can also be horrible...We were running a lot because of the lack of staff but at the end of the night the tips are so good that you forget about the craziness of the past 10 hours.",

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
