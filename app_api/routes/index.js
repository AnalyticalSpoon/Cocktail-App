const express = require('express');
const router = express.Router();

// import controllers
const ctrlCocktails = require('../controllers/cocktails');

// cocktails
router
  .route('/cocktails')
  .get(ctrlCocktails.cocktailsRead)
  .post(ctrlCocktails.cocktailsCreate);

router
  .route('/cocktails/:cocktailid')
  .get(ctrlCocktails.cocktailsReadOne)
  .put(ctrlCocktails.cocktailsUpdateOne)
  .delete(ctrlCocktails.cocktailsDeleteOne);

module.exports = router;