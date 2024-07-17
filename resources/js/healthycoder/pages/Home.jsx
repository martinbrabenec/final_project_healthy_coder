import React from 'react';
import QuotesComponent from '../components/QuotesComponent';
import '../../../css/home.scss';

const Home = () => {
  const handleButtonClick = (activity) => {
    console.log(`Clicked: ${activity}`);
    // Implement the click handling logic here
  };

  return (
    <div className="home-container">
      <div className="title-section">
        <h1>VibrantCoding: Energize Your Life, Elevate Your Code</h1>
      </div>
      <QuotesComponent />
      <div className="buttons-container">
        <button className="activity-button green" onClick={() => handleButtonClick('Hand & Wrist')}>
          <span className="activity-label">Hand & Wrist</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="green"/>
          </svg>
        </button>
        <button className="activity-button green-yellow" onClick={() => handleButtonClick('Neck & Upper Body')}>
          <span className="activity-label">Neck & Upper Body</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#8bc34a"/>
          </svg>
        </button>
        <button className="activity-button yellow" onClick={() => handleButtonClick('Posture & Sitting')}>
          <span className="activity-label">Posture & Sitting</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#ffeb3b"/>
          </svg>
        </button>
        <button className="activity-button yellow-orange" onClick={() => handleButtonClick('Head & Eyes')}>
          <span className="activity-label">Head & Eyes</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#ffc107"/>
          </svg>
        </button>
        <button className="activity-button orange" onClick={() => handleButtonClick('Lower Body')}>
          <span className="activity-label">Lower Body</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#ff9800"/>
          </svg>
        </button>
        <button className="activity-button orange-red" onClick={() => handleButtonClick('General')}>
          <span className="activity-label">General</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#ff5722"/>
          </svg>
        </button>
        <button className="activity-button red" onClick={() => handleButtonClick("I'm feeling lucky")}>
          <span className="activity-label">I'm feeling lucky</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <circle cx="12" cy="12" r="4" fill="#f44336"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
