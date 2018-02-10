/*

Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


*/

let friendData = require("../app/data/friends"); 

let testArray = [
    {
        name: "Matthew",
        age: "Cute" 
    }

];


//console.log("This is your friend data: " +  friendData); 


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData); //yay this works!!!

    });

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);

    });

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
  

    console.log(friendData);
  });

  



};