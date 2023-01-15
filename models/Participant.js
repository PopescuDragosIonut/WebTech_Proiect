const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Participant =  sequelize.define("participant", {
	idParticipant: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nume: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	prenume: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	idProiect: {
		type: DataTypes.INTEGER,
        allowNull: false
       // foreignKey: true,
	},	
})

module.exports = Participant;