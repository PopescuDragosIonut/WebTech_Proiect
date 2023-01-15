const sequelize = require("./database.js");
const Evaluator = require("./Evaluator");
const Participant = require("./Participant");
const Proiect=require("./Proiect");

Evaluator.hasMany(Proiect);


module.exports = {
  sequelize,
  Evaluator,
  Participant,
  Proiect,
  
};