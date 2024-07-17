// QuotesComponent.jsx
import React, { useEffect, useState } from 'react';
import '../../../css/quotescomponent.scss';

const QuotesComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        selectRandomQuote(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const selectRandomQuote = (quotesArray) => {
    const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setQuote(randomQuote.text);
    let authorName = randomQuote.author ? randomQuote.author.split(',')[0] : 'Unknown';
    setAuthor(authorName);
  };

  const handleButtonClick = () => {
    selectRandomQuote(quotes);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="quote-content">
      <h2>Random Quote</h2>
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">- {author}</p>
      <div className="quote-indicator">
        <button onClick={handleButtonClick}>New Quote</button>
      </div>
    </div>
  );
};

export default QuotesComponent;