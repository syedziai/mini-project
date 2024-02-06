const express = require("express");
const cors = require("cors");
const createEvents = require("./CreateEvents/createEvents");
const eventsList = require("./EventsList/eventsList");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/create", createEvents);
app.use("/events", eventsList);
app.listen(5000, () => {
  console.log("server listening port no.5000");
});
