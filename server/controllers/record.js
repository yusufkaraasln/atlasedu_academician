const Academician = require("../models/Academician");

const mostLiked = async (req, res) => {
    const {lim} = req.query;
    const academicians = await Academician.aggregate(
        [
            { "$project": {
                "name": 1,
                "image": 1,
                "info": 1,
                "desc": 1,
                "ip": 1,
                "faculty": 1,
                "likes": 1,
                "comments": 1,
                "likesCount": { "$size": "$likes" }
                 
            }},
            { "$sort": { "likesCount": -1 } },
            { "$limit": parseInt(lim) }
        ],)
    res.send(academicians)
    }   
    
    
 const mostCommented = async (req, res) => {
    const {lim} = req.query;
    const academicians = await Academician.aggregate(
        [
            { "$project": {
                "name": 1,
                "image": 1,
                "info": 1,
                "desc": 1,
                "ip": 1,
                "faculty": 1,
                "likes": 1,
                "comments": 1,
                "commentCount": { "$size": "$comments" }
                 
            }},
            { "$sort": { "commentCount": -1 } },
            { "$limit": parseInt(lim) }
        ],)
    res.send(academicians)
    }   

module.exports = {
    mostLiked,
    mostCommented
}
