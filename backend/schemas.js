const mongoose = require('mongoose');

const LanguagesSchema = new mongoose.Schema({
  name: String,
  languge: String,
  img: String,
  titleInit: String,
  titleSecondary: String,
  titleFull: String,
})

const CategoriesSchema = new mongoose.Schema({
  baseCategory : String,
  UA: String,
  ENG: String,
  SLO: String,
})

const DictionariesSchema = new mongoose.Schema({data : Array})

const LnguagesModel = mongoose.model('Languages', LanguagesSchema, 'languages');
const CategoriesModel = mongoose.model('Categories', CategoriesSchema, 'categories');
const DictionariesModel = mongoose.model('Dictionaries', DictionariesSchema, 'dictionaries');

module.exports = { LnguagesModel, CategoriesModel, DictionariesModel }