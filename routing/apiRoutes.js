/*

Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


*/
let path = require('path');
let friendData = require("../app/data/friends"); 
//let friends = friendData.friends;

var totalDifference = 0;
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

        let myMatch = {
			name: "",
			image: "",
			difference: 9999
        };

        	var currentHighScore;
		var arrayOfDifferences = [];
		let userData 	= req.body;
		let name 	= userData.name;
		let photo 	= userData.photo;
		let userScores 	= userData.answers;

        

        console.log(userData); 

        //loop through the friends data to get each friends scores
		for(var i = 0; i < friendData.length-1; i++){
			//console.log(friends[i].name);
			totalDifference = 0;

			//loop through that friends score
			for(var j = 0; j < friendData[i].answers.length; j++){
				// We calculate the absolute difference
				//totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].answers[j]));
                console.log("test"); 
                // if it's less than the current best match then this is new best match
				
				//console.log(friends[i].photo);
				if (totalDifference <= myMatch.difference){
					// set the values 
					myMatch.name = friendData[i].name;
					myMatch.image = friendData[i].photo;
					myMatch.difference = totalDifference;
                }
                
			}
		}
        
        
        res.json(myMatch); 




        //this pushes data to the api, only works when its by itself
        //friendData.push(req.body);

    });

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
  

    console.log(friendData);
  });

  



};