const Academician = require("../models/Academician");

const searchAcademician = async (req, res) => {

    try {
        const academicians = await Academician.find({
        $or: [
            { name: { $regex: req.query.query, $options: "i" } },
            { info: { $regex: req.query.query, $options: "i" } },
            { faculty: { $regex: req.query.query, $options: "i" } },
            { desc: { $regex: req.query.query, $options: "i" } },
        ],
        }).limit(10);
        res.status(200).json(academicians);
    } catch (error) {
        res.status(500).json(error);
    }


}

module.exports = {
    searchAcademician
}