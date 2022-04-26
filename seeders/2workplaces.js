"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workPlaces",
      [
        {
          name: "SohoHouse Amsterdam",
          address: "Spuistraat 210, 1012 VT Amsterdam",
          latitude: "52.371943656589714",
          longitude: " 4.8895560133541895",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8L6FhccsHY8tQFF8W-lR-cg7mvyLDqGShbA&usqp=CAU",
          rating: 33,
          type: "Membership Club/Hotel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adam Toren",
          address: "Overhoeksplein 1, 1031 KS Amsterdam",
          latitude: "52.38389270505304",
          longitude: "4.902428361645944",
          image:
            "https://lingotto.nl/wp-content/uploads/2020/07/Lingotto-ADAM-Toren-4.jpg",
          rating: 57,
          type: "Sky bar/restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hilton Amsterdam Hotel",
          address: "Apollolaan 138, 1077 BG Amsterdam",
          latitude: "52.35139737978266",
          longitude: "4.8720605984095045",
          image:
            "http://www.magtheweekly.com/assets/uploads/updates/2021-11-10/0_3_015533_album.jpg",
          rating: 44,
          type: "Hotel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The College Hotel",
          address: "Roelof Hartstraat 1, 1071 VE Amsterdam",
          latitude: "52.3527633734787",
          longitude: "4.883713340578554",
          image:
            "https://se-prod.onemeeting.com/assets/photos/1249/600/nl-NL/the-college-hotel-the-college-hotel-amsterdam-21647.jpg",
          rating: 3,
          type: "Hotel/restaurant/bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Segugio",
          address: "Utrechtsestraat 96, 1017 VS Amsterdam",
          latitude: "52.3624332280659",
          longitude: "4.8987272270878846",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/e5/27/13/segugio-upstairs.jpg",
          type: " Italian Restaurant",
          rating: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hotel Pullitzer",
          address: "Prinsengracht 323, 1016 GZ Amsterdam",
          latitude: "52.373031429639575",
          longitude: "4.883399927275195",
          image:
            "https://hospitality-on.com/sites/default/files/import/contenu/pulitzermsterdam_opt.jpg",
          type: "Luxury Hotel",
          rating: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Park Plaza Victoria Amsterdam",
          address: "Damrak 1-5, 1012 LG Amsterdam",
          latitude: "52.37707100563029",
          longitude: "4.8979784073960335",
          image:
            "https://www.amsterdam-travel-guide.net/images/hotels/park-plaza-victoria-hotel-amsterdam-netherlands.jpg",
          rating: 10,
          type: "Hotel,restaurant,bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Molly Malone's Irish Pub",
          address: "Oudezijds Kolk 9, 1012 AL Amsterdam",
          latitude: "52.376045999999995",
          longitude: "4.901283457776897",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/11/0a/01/2e/exterior.jpg",
          rating: 9,
          type: "Irish Pub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bulldog Palace",
          address: "Oudezijds Voorburgwal 220, 1012 GJ Amsterdam",
          latitude: "52.372533778908696",
          longitude: "4.896297128942493",
          image:
            "https://pbs.twimg.com/media/EITpg_8WsAAxXh_?format=jpg&name=4096x4096",
          rating: 3,
          type: "Coffe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grand Hotel Krasnapolsky",
          address: "Dam 9, 1012 JS Amsterdam",
          latitude: "52.372651682736844",
          longitude: "4.894108446334207",
          image:
            "https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/grand-hotel-krasnapolsky-amsterdam/anantara_grand_hotel_krasnapolsky_amsterdam_944x510.jpg",
          rating: 7,
          type: "Hotel/restaurant/bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("workPlaces", null, {});
  },
};
