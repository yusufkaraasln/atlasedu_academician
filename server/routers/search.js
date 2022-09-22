const { searchAcademician } = require("../controllers/search");

const router = require("express").Router();

router.get("/", searchAcademician)


module.exports = router;
