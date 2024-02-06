// Coverting readable data to unreadable data with passcode called as token
const jwt = require("jwt-simple");
const generate_token = (data, password) => {
  return jwt.encode(data, password);
};
module.exports = generate_token;
