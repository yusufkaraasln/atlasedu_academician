const mongoose = require("mongoose");

const AcademicianSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  info: {
    type: String,
  },
  desc: {
    type: String,
  },
  ip: {
    type: String,
  },
  faculty: {
    type: String,
  },
  likes: {
    type: [
      {
        anonId: {
          type: String,
          required: true,
        },
      },
    ],
  },
  comments: {
    type: [
      {
        comment: {
          type: String,
          required: true,
        },
        anonId: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Academician", AcademicianSchema);
