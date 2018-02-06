let path = require("path"); 

let testArray = [
    {
        name: "Matthew",
        age: "Cute" 
    }

];


module.exports = function(app) {


    //this isa t est filepath to see if this actually works
    app.get("/matthew", function(req, res) {
        //res.json(friends); 
        res.json(testArray); 
    }); 

    //need html route for home
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //need html route for survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //if no matching route was found. 
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html")); 

    });

};