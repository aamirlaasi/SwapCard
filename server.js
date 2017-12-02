const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// Require all models
 var db = require("./models");
// Use morgan logger for logging requests
// app.use(logger("dev"));
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sedlab",
  {
    useMongoClient: true
  }
);

// db.User.create({name: "Swap CARDS" })
// .then(function(dbUser) {
//   console.log(dbUser);
// })
// .catch(function(err) {
//   console.log(err.message);
// });
// Finding the users cards and trasefer it into the Card collection to show them on the home page 
// finding all of the users
db.User.find({},function(err,users){
  if(err){console.log(err)}
    else{
      // loop through the users and look for them gift cards
      users.forEach(function(user){
        // adding the owner and email
      email = user.email
      owner=user.fullname
      user.giftcard.forEach(function(item){
        item.owner=owner;
        item.email=email;
        db.Card.collection.insert(item).then(function(data){
         console.log(data.insertedIds.length + " records inserted!");
        })
      });

      // console.log(cards);

    })
    // console.log(cards);
  }
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




