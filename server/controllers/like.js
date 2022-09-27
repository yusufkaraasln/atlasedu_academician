const Academician = require("../models/Academician");

const like = async (req, res) => {
  try {
    const like = await Academician.findByIdAndUpdate(req.params.id, {
      $push: {
        likes : {
            anonId: req.body.anonId,
        },
      },

      new: true,
    });
    res.status(200).json(like);
  } catch (error) {
    res.status(500).json(error);
  }
};
const unlike = async (req, res) => {
  try {
    const unlike = await Academician.findByIdAndUpdate(req.params.id, {
        $pull: {
            likes : {
                anonId: req.body.anonId,
            },
          },
      new: true,
    });
    res.status(200).json(unlike);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  like,
  unlike,
};
