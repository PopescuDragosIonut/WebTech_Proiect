const ProiectController = require("../controllers/Proiect");
const router = require('express').Router();

router.get("/", ProiectController.getProiecte);
router.post("/", ProiectController.createProiect);



module.exports = router;