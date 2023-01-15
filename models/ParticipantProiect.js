const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const ParticipantProiect = sequelize.define("participantproiect", {
    idParticipantProiect: {
        type:DataTypes.INTEGER,
    },
    idParticipant: {
        type:DataTypes.INTEGER,
    },
    idProiect: {
        type:DataTypes.INTEGER
    },
})
module.exports = ParticipantProiect;