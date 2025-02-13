import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    if (!amount) return;
    try {
      const response = await axios.get("http://localhost:5000/convert", {
        params: { from, to, amount },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error converting currency", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
      </select>
      <span> to </span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
      </select>
      <button onClick={handleConvert}>Convert</button>

      {result && (
        <h3>
          {result.amount} {result.from} = {result.convertedAmount} {result.to}
        </h3>
      )}
    </div>
  );
};

export default App;
