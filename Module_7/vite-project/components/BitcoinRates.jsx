import React, { useState } from "react";
import useBitcoinPrice from "./useBitcoinPrice";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching Bitcoin price: {error}</p>}
      {price && (
        <p>
          Current Bitcoin Price: {price} {currency}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
