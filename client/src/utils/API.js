import axios from "axios";

export default {
  // Gets all cards
  getCards: function() {
    return axios.get("/api/cards");
  },
  //Choose specified card
  chooseCard: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Gets login modal-dialog
  getLogin: function() {
    return axios.get("/api/login")
  },
  // Gets signup modal-dialog
  getSignup: function() {
    return axios.get("/api/signup")
  }
};
