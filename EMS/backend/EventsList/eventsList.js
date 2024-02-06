const client = require("../client/client");
const express = require("express");
let eventsList = express.Router();
const db_details = require("../db_details/db_details");

eventsList.get("/", async (req, res) => {
  try {
    await client.connect();
    let eventList = await client
      .db(db_details.database)
      .collection(db_details.events)
      .find();
    console.log("created Event from DB:", eventList);
    res.json(eventList); // Send the events as JSON response
  } catch (error) {
    console.error("Error during creating events:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB connection after the operation
    await client.close();
  }
});
module.exports = eventsList;
