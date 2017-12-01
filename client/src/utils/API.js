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
  // Signup
  Signup: function() {
    return axios.get("/api/user");
  }
};
