require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Replace with your API key from ExchangeRate-API or Open Exchange Rates
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

app.get("/convert", async (req, res) => {
  try {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const response = await axios.get(`${BASE_URL}${from}`);
    const rate = response.data.conversion_rates[to];

    if (!rate) {
      return res.status(400).json({ error: "Invalid currency code" });
    }

    const convertedAmount = (amount * rate).toFixed(2);
    res.json({ from, to, amount, convertedAmount, rate });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
