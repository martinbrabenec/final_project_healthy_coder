import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import QuoteBar from '../components/QuoteBar';
import '../../../css/home.scss';

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [counter, setCounter] = useState(0); // Counter state

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/activities');
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    fetchActivities();
  }, []);

  useEffect(() => {
    // Start the counter
    const startTime = Date.now();
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000); // Update counter every second

    // Reset the counter at midnight
    const resetTime = () => {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 0, 0); // Set to midnight
      return nextMidnight - now;
    };

    const timeout = setTimeout(() => {
      setCounter(0); // Reset counter
    }, resetTime());

    return () => {
      clearInterval(interval); // Cleanup interval
      clearTimeout(timeout); // Cleanup timeout
    };
  }, []);

  const handleActivitySelect = (filtered, zone) => {
    setFilteredActivities(filtered);
    setSelectedZone(zone);
  };

  return (
    <div className="container-fluid p-0">
      <Sidebar onActivitySelect={handleActivitySelect} />
      <div className="content">
        <div className="welcome-message">
          Welcome to the Healthy Coder App
        </div>
        <div className="fixed-content">
          <div className="quote-container">
            <QuoteBar />
          </div>
          <div className="counter">
            Time spent on the app today: {Math.floor(counter / 60)} minutes {counter % 60} seconds
          </div>
        </div>
        <div className="main-content">
          {selectedZone && (
            <div>
              <h2>{selectedZone} Activities</h2>
              <ul>
                {filteredActivities.map(activity => (
                  <li key={activity.id}>{activity.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="card-container">
            {(selectedZone ? filteredActivities : activities).map((activity) => (
              <div key={activity.id} className="card">
                <img 
                  src={`/${activity.image}`} 
                  className="card-img-top" 
                  alt={activity.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{activity.name}</h5>
                  <p className="card-text">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
