const express = require("express");
const cors = require("cors");
const login = require("./login/login");
const signup =require('./signup/signup')
const laptops = require("./laptops/laptops");
const mobiles = require("./mobiles/mobiles");
const watches = require("./watches/watches");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/login", login);
app.use("/register",signup)
app.use("/laptops", laptops);
app.use("/mobiles",mobiles);
app.use("/watches",watches)
app.listen(8080, () => {
  console.log("server listening port no.8080");
});
