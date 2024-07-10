const bcrypt = require("bcryptjs");
const admins = [
  {
    name: {
      en: "khatikrishi",
    },
    image: "https://i.ibb.co/d294W8Y/team-4.jpg",
    email: "khatikrishi58@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "+8801718-447061",
    role: "admin",
    joiningData: new Date(),
  },
];

module.exports = admins;
