const { MongoClient } = require("mongodb");
require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// const uri = "mongodb://localhost:27017/productDB";
const uri = `mongodb+srv://${username}:${password}@bonartisans.uhebi.mongodb.net/?retryWrites=true&w=majority&appName=bonartisans`;
const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
module.exports = client;
