import React, { useState, useEffect } from 'react';

const QuoteBar = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/today');
        const data = await response.json();
        const { q, a } = data[0];
        setQuote(q);
        setAuthor(a);
      } catch (error) {
        console.error('Error fetching the quote of the day:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote-text m-0">Quote of the day: "{quote}" - {author}</p>
    </div>
  );
};

export default QuoteBar;
