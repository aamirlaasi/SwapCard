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
  addNewCard: function(store, price, exp, fimage, bimage) {
    // console.log(store, price);
    return axios.post("/api/cards/addNewCard/" + store + "-" + price + "-" + exp + "-" + fimage + "-" +bimage);
  }
};
