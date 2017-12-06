// import { exists } from "fs";

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Serve up static assets
app.use(express.static("client/build"));


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
        // to prevent the card from Duplicate
        if(!item.stored){
          item.stored = true;
      db.User.update({"fullname":owner , "giftcard.stored":false} , {$set: {"giftcard.$.stored": true}},{multi:true},function(err){
        if(err)throw(err);
      });
      db.Card.collection.insert(item).then(function(data){
          console.log(data.insertedIds.length + " records inserted!");
          console.log("________________________________");
        });
      };
      });

      // console.log(cards);

    })
    // console.log(cards);
  }
})
app.post("/api/cards/addNewUser/:email/:username",function(req,res){
  console.log(req.params);
  // db.User.create(function(err,data){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log(data);
  //   }
    
  // })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




