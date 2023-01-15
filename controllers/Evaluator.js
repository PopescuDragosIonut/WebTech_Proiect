const Evaluator = require("../models/Evaluator");
const Proiect = require("../models/Proiect");


const getEvaluator = async (req, res) => {
	const evaluatorId = req.params.id;
	try {
	  const evaluator = await Evaluator.findOne({ where: { id: evaluatorId } });
	  res.status(200).send(evaluator);
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const getAllEvaluatori = async (req,res) => {
	try{
		const Evaluatori = await Evaluator.findAll();
		 res.status(200).json(Evaluatori);
	}
	catch(err){
		 res.status(500).json(err);
	}
}

 const createEvaluator = async (req,res) => {
	try {
		const newEvaluator = await Evaluator.create(req.body);
		res.status(200).send(newEvaluator);
	}
	catch(err){
		res.status(500).send(err);
	}
};

 module.exports = {
	
	getAllEvaluatori,
	createEvaluator,
	getEvaluator,
	
};