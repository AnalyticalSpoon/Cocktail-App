const mongoose = require('mongoose');

// subdocument
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  unit: String,
});

// document
const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  family: String,
  directions: {
    type: String,
    required: true
  },
  ingredients: {
    type: [ingredientSchema],
    required: true
  },
  picture: String
});

// compile schema
mongoose.model('Cocktail', cocktailSchema);