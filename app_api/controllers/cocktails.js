const mongoose = require('mongoose');
const Cocktail = mongoose.model('Cocktail');

const cocktailsRead = (req, res) => {
  Cocktail
    .find({})
    .exec((err, cocktails) => {
      if (!cocktails) {
        return res
          .status(404)
          .json({ "message": "cocktails not found" });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(cocktails);
      }
    });
}

const cocktailsReadOne = (req, res) => {
  Cocktail
    .findById(req.params.cocktailid)
    .exec((err, cocktail) => {
      if (!cocktail) {
        return res
          .status(404)
          .json({ "message": "cocktail not found" });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(cocktail);
      }
    });
}

const cocktailsCreate = (req, res) => {
  let cocktail = {
    name: req.body.name,
    ...(req.body.description) && { description: req.body.description },
    ...(req.body.family) && { family: req.body.family },
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    ...(req.body.picture) && { picture: req.body.picture }
  };

  Cocktail.create(cocktail,
    (err, location) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(location);
      }
    });
}

const cocktailsUpdateOne = (req, res) => {
  if (!req.params.cocktailid) {
    return res
      .status(404)
      .json({
        "message": "Not found, cocktailid is required"
      });
  }
  Cocktail
    .findById(req.params.cocktailid)
    .exec((err, cocktail) => {
      if (!cocktail) {
        return res
          .status(404)
          .json({
            "message": "cocktail not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      cocktail.name = req.body.name;
      if (req.body.description) {
        cocktail.description = req.body.description;
      }
      if (req.body.family) {
        cocktail.family = req.body.family;
      }
      cocktail.ingredients = req.body.ingredients;
      cocktail.directions = req.body.directions;
      cocktail.save((err, cocktail) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(cocktail);
        }
      });
    });
}

const cocktailsDeleteOne = (req, res) => {
  const { cocktailid } = req.params;
  if (cocktailid) {
    Loc
      .findByIdAndRemove(cocktailid)
      .exec((err, cocktail) => {
        if (err) {
          return res
            .status(404)
            .json(err);
        }
        res
          .status(204)
          .json(null);
      }
      );
  } else {
    res
      .status(404)
      .json({
        "message": "No cocktail"
      });
  }
};

module.exports = {
  cocktailsRead,
  cocktailsReadOne,
  cocktailsCreate,
  cocktailsUpdateOne,
  cocktailsDeleteOne
};