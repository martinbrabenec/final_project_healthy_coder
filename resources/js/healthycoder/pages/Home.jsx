import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import QuoteBar from '../components/QuoteBar';
import '../../../css/home.scss';

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://www.thehealthycoder.test/api/activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    fetchActivities();
  }, []);

  const handleActivitySelect = (filtered, zone) => {
    setFilteredActivities(filtered);
    setSelectedZone(zone);
  };

  return (
    <div className="container-fluid p-0">
      <Sidebar onActivitySelect={handleActivitySelect} />
      <div className="content">
        <QuoteBar />
        <div className="main-content">
          <h1 className="mb-4 text-center">Welcome to the Healthy Coder App</h1>
          
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