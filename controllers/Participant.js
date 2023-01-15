const Participant = require("../models/Participant");
const Evaluator=require("../models/Evaluator");

const getParticipanti= async (req,res) => {
	try{
		const participanti = await Participant.findAll();
		res.status(200).json(participanti);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const createParticipant = async (req,res) => {
	try {
		const newParticipant = await Participant.create(req.body);

		const newEvaluator=new Evaluator();
		newEvaluator.prenume=newParticipant.prenume;
		newEvaluator.nume=newParticipant.nume;

		await newEvaluator.save();

		
		res.status(200).send(newEvaluator && newParticipant);
	}
	catch(err){
		res.status(500).send(err);
	}
};


module.exports = {
	
	createParticipant,
    getParticipanti
    
};