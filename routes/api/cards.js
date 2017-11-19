const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/")
  .get(cardsController.findAll)
//   .post(cardController.create);

// Matches with "/api/cards/:id"
// router
//   .route("/:id")
//   .get(cardController.findById)
//   .put(cardController.update)
//   .delete(cardController.remove);

module.exports = router;
