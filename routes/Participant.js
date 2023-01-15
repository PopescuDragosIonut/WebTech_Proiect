const ParticipantController = require("../controllers/Participant");
const router = require('express').Router();

router.get("/", ParticipantController.getParticipanti);
router.post("/",ParticipantController.createParticipant);

module.exports = router;