const db = require("../models");

module.exports = function (app) {

    app.get("/", function(req,res){
        console.log(req);
        res.status(200).sendFile("../public/index.html");
    })
    app.get("/exercise", function(req,res){
        console.log(req);
        res.status(200).sendFile("../public/exercise.html")
    })

};
