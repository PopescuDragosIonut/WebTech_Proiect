const router = require('express').Router();
const EvaluatorRouter = require("./Evaluator");
const ParticipantRouter = require("./Participant");
const ProiectRouter = require("./Proiect");

router.use("/Evaluator", EvaluatorRouter);
router.use("/Participant", ParticipantRouter);
router.use("/Proiect", ProiectRouter);

module.exports = router;