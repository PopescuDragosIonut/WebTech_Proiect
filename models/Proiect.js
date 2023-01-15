const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Proiect =  sequelize.define("proiect", {
	idProiect: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement:true
		
	},
	titluProiect: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	livrabil: {
		type: DataTypes.STRING,
		allowNull: true,
	}
	
	
	
    
})

module.exports = Proiect;