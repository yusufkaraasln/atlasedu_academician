const router = require("express").Router();
const { deleteAcademician,addAcademician, getAcademician ,getAllAcademicians, getAcademicianByFaculty} = require("../controllers/academician");
const { makeComment } = require("../controllers/comment");
const { unlike, like } = require("../controllers/like");
// admin only
router.post("/add", addAcademician);
router.get("/faculty/:faculty", getAcademicianByFaculty);
router.get("/:id", getAcademician);
router.get("/", getAllAcademicians);

// comment
router.put("/mcomment/:id", makeComment);

// like and unlike
router.put("/like/:id", like);
router.put("/unlike/:id", unlike);


module.exports = router;
