const EvaluatorController = require("../controllers/Evaluator");
const router = require('express').Router();


router.get("/:id", EvaluatorController.getEvaluator);
router.post("/", EvaluatorController.createEvaluator);
router.get("/", EvaluatorController.getAllEvaluatori);


module.exports = router;