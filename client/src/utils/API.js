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
  notify: function(email) {
    return axios.get("/api/cards/email/" + email);
    // alert(email);
  },
  getUserProfile: function(email) {
    return axios.get("/api/cards/userProfile/" + email);
  },
  addNewCard: function(store, price, exp, fimage, bimage) {
    console.log(store, price, exp, fimage, bimage);
    return axios.post("/api/cards/addNewCard/" + store + "-" + price + "-" + exp + "-" + fimage + "-" + bimage);
  }
};
