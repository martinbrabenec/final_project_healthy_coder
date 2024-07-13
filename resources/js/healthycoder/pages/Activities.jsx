import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../css/activities.scss';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('/api/activities') // Update this with your actual API endpoint if necessary
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">All Activities</h2>
      <div className="row">
        {activities.map(activity => {
          const imageUrl = `/assets/activities/${activity.image.split('/').pop()}`;
          console.log(`Image URL: ${imageUrl}`);
          
          return (
            <div className="col-md-3 col-sm-6 mb-4" key={activity.id}>
              <div className="card h-100">
                <div className="image-container">
                  <img src={imageUrl} alt={activity.name} className="card-img-top activity-image" />
                  <div className="overlay">
                    <Link to={`/activities/${activity.id}`} className="activity-name">{activity.name}</Link>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{activity.name}</h5>
                  <p className="card-text">{activity.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activities;
