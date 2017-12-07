const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/:email")
  .get(cardsController.findAll)
//   .post(cardController.create);

// Matches with "/api/cards/:id"
router
  .route("/card/:id")
  .get(cardsController.findById)
//   .put(cardsController.update)
//   .delete(cardsController.remove);

// Matches with "/api/cards/email/:email"

router
  .route("/email/:email")
  .put(cardsController.notify)

// Matches with "/api/cards/userProfile/:email"

router
  .route("/userProfile/:email")
  .get(cardsController.findByEmail)

  
// Matches with "/api/cards/saveCard:"
router
  .route("/addNewCard/:store-:price-:exp-:fimage-:bimage")
  .post(cardsController.addNewCard)

// Matches with "/api/cards/saveCard:"
router
  .route("/getTradeCard/:email")
  .get(cardsController.getTradeCard)


module.exports = router;
