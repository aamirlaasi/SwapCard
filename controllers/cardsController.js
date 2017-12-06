
const db = require("../models");
const notifyEmail = require("./email.js");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Card
      .find({chosen: false})
      .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Card
    .findById(req.params.id)
    .then(dbModel => res.send(dbModel))
    .catch(err => res.status(422).json(err));
  },
  notify: function(req, res) {
    notifyEmail(req.params.email);
    db.Card
    .findOneAndUpdate({ email:req.params.email }, {chosen: true} )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    // console.log(req.params.email);
  },
  findByEmail: function(req, res) {
    // console.log("from controller:" + req.params.email)
    db.User
    .find({email:req.params.email})
    .then(dbUserProfile => {
      // dbUserProfile = JSON.stringify(dbUserProfile[0]);
      // console.log(dbUserProfile[0]);      
      res.send(dbUserProfile[0]);
      })
    .catch(err => res.status(422).json(err));
    
  },
  addNewCard: function(req,res) {
    console.log(req.params);
  },
  getTradeCard: function(req, res) {
    // console.log("from controller:" + req.params.email)
    db.Card
    .find({email:req.params.email, chosen: 1})
    .then(dbModel => {
      // dbUserProfile = JSON.stringify(dbUserProfile[0]);
      // console.log(dbUserProfile[0]);      
      res.send(dbModel);
      })
    .catch(err => res.status(422).json(err));

  }
}
