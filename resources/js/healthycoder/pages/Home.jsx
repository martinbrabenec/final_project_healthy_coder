import React from 'react';
import QuotesComponent from '../components/QuotesComponent';
import '../../../css/home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-section">
        <h1>VibrantCoding: Energize Your Life, Elevate Your Code</h1>
      </div>
      <QuotesComponent />
      <div className="buttons-container">
        <button className="activity-button green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button green-yellow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button yellow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button yellow-orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button orange-red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
        <button className="activity-button red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;