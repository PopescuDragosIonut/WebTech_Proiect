const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Evaluator = sequelize.define("evaluator", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	prenume: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nume: {
		type: DataTypes.STRING,
		allowNull: false,
	}

})

module.exports = Evaluator;