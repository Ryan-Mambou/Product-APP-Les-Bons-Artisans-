const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/products";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
