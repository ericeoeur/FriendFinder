//Begin server with NPM dependencies 

let express = require("express");
let bodyParser = require("body-parser"); 
let path = require("path");

//set up the express app 

let app = express();
let PORT = process.env.PORT || 3000; 

//now set up your express app to handle body parsing 

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); 

//place variable here to catch data from FriendFinder Arrays

let friends = [
    {
        routeName: "matt", 
        name: "Matt",
        role: "Partner",
        birthdate: "1/23/88",
        city: "Austin, Texas"
    },
    {
        routeName: "Viviana", 
        name: "Vivi",
        role: "Best Friend",
        birthdate: "11/26/88",
        city: "Chicago, IL"
    },
    {
        routeName: "Siena", 
        name: "Siena",
        role: "Best Friend",
        birthdate: "5/13/88",
        city: "San Francisco, California"
    }
];


//this will display the entire variable of friends 
app.get("/all", function (req, res){
    res.json(friends);
});


app.listen(PORT, function(){
    console.log("This FriendFinder App is listening on port: " + PORT);
})

