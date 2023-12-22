const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3300;
const cors = require('cors');
require('dotenv').config()
const mongoUser = process.env.USER_NAME;
const mongoPassword = process.env.DATABASE_KEY;
const bdApi = require('./schemas');

const mongoConnect = async () => {
   try {
    await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.vxtbj.mongodb.net/?retryWrites=true&w=majority`, {dbName: "test"});
   }
   catch (error) {
    console.log(`you got an error : ${error}`)
   }
}

app.use(express.json())
app.use(cors({
  origin: '*'
}))


app.listen(port, () => {
  console.log("backend is running")
  mongoConnect()
  .then( () => console.log("Mongo is running"))
  .catch( (error) => console.log(`you got an error : ${error}`) )
})

app.get('/', (req, res) => {
    res.send("Hi")
})

app.get('/languages', (req, res) => {
   const words = async( ) => {
   await bdApi.LnguagesModel.find({})
   .then( data => {
    res.send(data)
})
  }
  words();
})

app.get('/categories', (req, res) => {
  const categories = async() => {
    await bdApi.CategoriesModel.find({})
      .then( data => res.send(data))
  }
  categories();
})

app.get('/dictionaries', (req, res) => {
  const dictionaries = async() => {
    await bdApi.DictionariesModel.find({})
      .then( data => res.send(data))
  }
  dictionaries();
})