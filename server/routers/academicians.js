const router = require("express").Router();
const { deleteAcademician,addAcademician, getAcademician ,getAllAcademicians, getAcademicianByFaculty} = require("../controllers/academician");
const { makeComment } = require("../controllers/comment");
const { unlike, like } = require("../controllers/like");
const { mostLiked, mostCommented } = require("../controllers/record");
const { searchAcademician } = require("../controllers/search");
// admin only
router.post("/add", addAcademician);
router.get("/faculty/:faculty", getAcademicianByFaculty);
router.get("/find/:id", getAcademician);
router.get("/", getAllAcademicians);

// comment
router.put("/mcomment/:id", makeComment);

// like and unlike
router.put("/like/:id", like);
router.put("/unlike/:id", unlike);


//get max likes and max comments
router.get("/mlikes",  mostLiked);
router.get("/mcomments",  mostCommented);



module.exports = router;
