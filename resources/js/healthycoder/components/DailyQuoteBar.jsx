import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://zenquotes.io/api/today');
        const { q, a } = response.data[0];
        setQuote(q);
        setAuthor(a);
      } catch (error) {
        console.error('Error fetching the quote of the day:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <blockquote>
        <p>"{quote}"</p>
        <footer>- {author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteOfTheDay;
