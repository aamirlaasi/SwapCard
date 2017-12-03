const db = require("../models");
const notifyEmail = require("./email.js");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Card
      .find(req.query)
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
    notifyEmail(req.params.email)
    console.log(req.params.email);
  },
  findByEmail: function(req, res) {
    db.User.find({email:req.params.email})
  }
};
