import { useState, useEffect, useContext } from 'react';
import { EmojiContext } from '../context/EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const { mood, moodToEmoji } = useContext(EmojiContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPrice(data.bitcoin[currency.toLowerCase()]);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching Bitcoin price:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>Current Bitcoin Price: {price ? `${price} ${currency}` : 'Loading...'}</p>
      <p>Current Mood: {moodToEmoji[mood]}</p>
    </div>
  );
}

export default BitcoinRates;
