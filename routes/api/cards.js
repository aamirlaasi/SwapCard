const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/")
  .get(cardsController.findAll)
//   .post(cardController.create);

// Matches with "/api/cards/:id"
router
  .route("/:id")
  .get(cardsController.findById)
//   .put(cardsController.update)
//   .delete(cardsController.remove);

// Matches with "/api/cards/email/:email"

router
  .route("/email/:email")
  .get(cardsController.notify)
  
// Matches with "/api/cards/saveCard:"
router
  .route("/addNewCard/:store-:price-:exp-:fimage-:bimage")
  .post(cardsController.addNewCard)

module.exports = router;
