const Proiect = require("../models/Proiect");

const getProiecte= async (req,res) => {
	try{
		const proiecte = await Proiect.findAll();
		res.status(200).json(proiecte);
	}
	catch(err){
		res.status(500).json(err);
	}
}



const createProiect = async (req,res) => {
	try {
		const newProiect = await Proiect.create(req.body);
		res.status(200).send(newProiect);
	}
	catch(err){
		res.status(500).send(err);
	}
};



const hardProject=new Proiect();
hardProject.titluProiect="Istoria Romanilor";
hardProject.livrabil="link1";

hardProject.save();

 


module.exports = {
	
	createProiect,
    getProiecte
    
};