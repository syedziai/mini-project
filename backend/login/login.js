const client = require("../client/client");
const generate_token = require("../generate_token/generate_token");
let token = require("../token/token");
const express = require("express");
let login = express.Router();
const db_details = require("../db_details/db_details");
const bcrypt = require("bcrypt");
login.post("/", async (req, res) => {
  try {
    await client.connect();

    let user = await client
      .db(db_details.database)
      .collection(db_details.register_user)
      .findOne({
        user_name: req.body.userName,
      });
    console.log("User from DB:", user);
    console.log("Request user_name:", req.body.userName);
    console.log("Request user_password:", req.body.userPassword);

    // If user not found
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (user) {
      if (user.user_password === req.body.userPassword) {
        let new_token = generate_token(
          {
            user_name: req.body.userName,
            user_password: req.body.userPassword,
          },
          "syed@143"
        );
        token.server_token = new_token;
        return res
          .status(200)
          .json({ message: "Login successful", token: token.server_token });
      }
    }
    // const passwordMatch = await bcrypt.compare(
    //   req.body.userPassword,
    //   user.user_password
    // );

    // if (passwordMatch) {
    //   let new_token = generate_token(
    //     { user_name: req.body.userName, user_password: req.body.userPassword },
    //     "syed@143"
    //   );
    //   token.server_token = new_token;
    //   return res.status(200).json({ message: "Login successful", "token":token.server_token });
    // } else {
    return res.status(401).json({ error: "Invalid username or password" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB connection after the operation
    await client.close();
  }
});
module.exports = login;
