const Academician = require("../models/Academician");

const makeComment = async (req, res) => {
  try {
    const comment = await Academician.findByIdAndUpdate(req.params.id, {
      $push: {
        comments: {
          comment: req.body.comment,
          anonId: req.body.anonId,
        },
      },
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
    makeComment,
}
