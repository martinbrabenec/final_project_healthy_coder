import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      const data = response.data[0];
      setQuote(data.q);
      setAuthor(data.a);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <p><em>- {author}</em></p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;
