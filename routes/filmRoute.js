const router = require('express').Router(); // objeto de rutas
const filmController = require("../controllers/filmController");

router.get("/:title", filmController.getFilm);
router.post("/", filmController.postFilm);


module.exports = router;