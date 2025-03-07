const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const dotenv = require("dotenv");

dotenv.config();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Export the config object
module.exports = config;

// Log the variables (Optional for testing)
console.log(config);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
