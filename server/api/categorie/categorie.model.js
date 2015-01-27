'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  id : String,
  name : String,
  sousCategories : Array

});

module.exports = mongoose.model('Categorie', CategorieSchema);
