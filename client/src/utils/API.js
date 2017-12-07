import axios from "axios";

export default {
  // Gets all cards
  getCards: function(email) {
    // console.log( axios.get("/api/cards"));
    return axios.get("/api/cards/" + email);
  },
  //Choose specified card
  chooseCard: function(id) {
    return axios.get("/api/cards/card/" + id);
  },
  notify: function(id, email, traderEmail) {
    return axios.get("/api/cards/id/" + id + "-" + email + "-" + traderEmail);
    // alert(email);
  },
  getUserCard: function(email) {
    // console.log(axios.get("/api/cards/userProfile/" + email));
   return axios.get("/api/cards/userCard/" + email);
  },
  getUserCardsSamePrice: function(email, price) {
    // console.log(axios.get("/api/cards/userProfile/" + email));
   return axios.get("/api/cards/userCardsSamePrice/" + email + "-" + price);
  },
  getUserProfile: function(email) {
   return axios.get("/api/cards/userProfile/" + email);
  },
  addNewCard: function(store, price, exp, fimage, bimage) {
    // console.log(store, price, exp, fimage, bimage);
    return axios.post("/api/cards/addNewCard/" + store + "-" + price + "-" + exp + "-" + fimage + "-" + bimage);
  },
  getTradeCards: function(email) {
    return axios.get("/api/cards/getTradeCards/" + email);
  }
};
