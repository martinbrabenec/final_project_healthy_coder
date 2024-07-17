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

    // Extract the author's name and remove ", type.fit" if present
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
    <div className="quote-container">
      <h1>Random Quote</h1>
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">- {author}</p>
      <button className="quote-button" onClick={handleButtonClick}>Need wisdom? Tap for a quote.</button>
    </div>
  );
};

export default QuotesComponent;
