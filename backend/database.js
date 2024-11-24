const { MongoClient } = require("mongodb");
require("dotenv").config();

// const uri = "mongodb://localhost:27017/productDB";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
module.exports = client;
