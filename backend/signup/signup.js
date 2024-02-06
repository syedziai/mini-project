const client = require("../client/client");
const express = require("express");
const bcrypt = require("bcrypt");
let signup = express.Router();
const db_details = require("../db_details/db_details");
signup.post("/", async (req, res) => {
  const { user_name, user_password } = req.body;
  try {
    client.connect();

    // Select the appropriate database and collection
    const db = client.db(db_details.database);
    const collection = db.collection(db_details.register_user);

    // Check if the username already exists
    const existingUser = await collection.findOne({ user_name });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password before saving it
    // const hashedPassword = await bcrypt.hash(user_password, 10);

    // Insert the new user into the collection
    await collection.insertOne({ user_name, user_password});

    // Close the database connection
    client.close();

    res.status(201).json({
      message: "User registered successfully",
      user_name: user_name,
      user_passowrd: user_password,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = signup;
