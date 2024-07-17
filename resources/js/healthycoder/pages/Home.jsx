import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuotesComponent from '../components/QuotesComponent';
import axios from 'axios';
import '../../../css/home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [randomAlternative, setRandomAlternative] = useState(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const storedTime = localStorage.getItem('elapsedTime');
    const startTime = storedTime ? parseInt(storedTime, 10) : Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const timeElapsed = now - startTime;
      setElapsedTime(timeElapsed);
      localStorage.setItem('elapsedTime', startTime.toString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const now = new Date();
    const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
    const timeout = setTimeout(() => {
      localStorage.removeItem('elapsedTime');
      setElapsedTime(0);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = (bodyZone) => {
    navigate(`/activities?body_zone=${encodeURIComponent(bodyZone)}`);
  };

  const handleBullseyeClick = () => {
    setIsTransforming(true);
    axios.get('/api/alternative_activities')
      .then(response => {
        const randomActivity = response.data[Math.floor(Math.random() * response.data.length)];
        setRandomAlternative(randomActivity);
        setTimeout(() => {
          setIsTransforming(false);
          navigate(`/alternatives`, { state: { selectedActivity: randomActivity } });
        }, 2000);
      })
      .catch(error => {
        console.error('Error fetching alternative activities:', error);
        setIsTransforming(false);
      });
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="home-content">
      <div className="title-section">
        <h1>VibrantCoding: Energize Your Life, Elevate Your Code</h1>
      </div>
      <div className="boxes-section">
        <div className="quote-section common-box">
          <QuotesComponent />
        </div>
        <div className="timer-section common-box">
          <h2>Time Elapsed</h2>
          <div className="timer-content">
            <p className="timer-text">{formatTime(elapsedTime)}</p>
            {elapsedTime < 28800000 ? (
              <svg className="go-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                <circle cx="50" cy="50" r="40" fill="green" />
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24">GO</text>
              </svg>
            ) : (
              <svg className="stop-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                <circle cx="50" cy="50" r="40" fill="red" />
                <path d="M30 30h40v40H30z" fill="white" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="buttons-section">
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
        <button className={`activity-button multicolored ${isTransforming ? 'transforming' : ''}`} onClick={handleBullseyeClick}>
          <span className="activity-label">I'm feeling lucky</span>
          <div className="bullseye">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="white"/>
              <circle cx="12" cy="12" r="6" fill="#ff0000"/>
              <circle cx="12" cy="12" r="3" fill="#00ff00"/>
            </svg>
            {isTransforming && (
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M2 12h20" stroke="black" strokeWidth="2" />
                <path d="M14 6l8 6-8 6" fill="none" stroke="black" strokeWidth="2" />
              </svg>
            )}
          </div>
          {isTransforming && randomAlternative && (
            <div className="transformation">
              <img src={`/assets/alternative_activities/${randomAlternative.link_to_photo}`} alt={randomAlternative.alternative_activity} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;