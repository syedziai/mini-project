const url = require("../Url/url");
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);

module.exports = client;
