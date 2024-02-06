const client = require("../client/client");
const express = require("express");
const db_details = require("../db_details/db_details");
const middleware = require("../middleware/middleware");
let laptops = express.Router();
laptops.get("/", middleware, async (req, res) => {
  try {
    await client.connect();
    let arr = await client
      .db(db_details.database)
      .collection(db_details.laptops)
      .find()
      .toArray();
      res.json(arr)
    // res.json({ laptops: arr[0].laptops });
    console.log(arr[0].laptops);
  } catch (error) {
    console.error("Error in the /laptops route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close(); // Make sure to close the connection
  }
});

module.exports = laptops;
