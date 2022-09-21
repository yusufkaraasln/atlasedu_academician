const Academician = require("../models/Academician");

const addAcademician = async (req, res) => {
  try {
    const academician = new Academician(req.body);
    const savedAcademician = await academician.save();

    res.status(200).json(savedAcademician);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAcademicianByFaculty = async (req, res) => {
  try {
    const faculty = await Academician.find({ faculty: req.params.faculty });

    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({
      message: "hata çıktı" + error,
    });
  }
};

const getAcademician = async (req, res) => {
  try {
    const academician = await Academician.findById(req.params.id);
    res.status(200).json(academician);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllAcademicians = async (req, res) => {
  const long = req.query.long;

  try {
    if (long) {
      const academicians = await Academician.find();
      return res.status(200).json(academicians.length);
    }

    const academicians = await Academician.find();
    res.status(200).json(academicians);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addAcademician,
  getAcademician,
  getAllAcademicians,
  getAcademicianByFaculty,
};
