const client = require("../client/client");
const express = require("express");
let createList = express.Router();
const db_details = require("../db_details/db_details");

createList.post("/", async (req, res) => {
  const { eventName, eventDate, description } = req.body;
  try {
    await client.connect();

    let createEvent = await client
      .db(db_details.database)
      .collection(db_details.events)
      .insertOne({ eventName, eventDate, description });
    console.log("created Event from DB:", createEvent);
    console.log("Request user_name:", req.body.eventName);
    console.log("Request user_password:", req.body.eventDate);
    console.log("Request user_password:", req.body.description);
  } catch (error) {
    console.error("Error during creating events:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB connection after the operation
    await client.close();
  }
});
module.exports = createList;
