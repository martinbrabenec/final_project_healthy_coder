import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Alternatives() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('/api/alternative_activities')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching alternative activities:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Alternative Activities</h2>
      <div className="row">
        {activities.map(activity => (
          <div className="col-md-3 col-sm-6 mb-4" key={activity.id}>
            <div className="card h-100">
              <div className="image-container">
                <img src={`/assets/alternative_activities/${activity.link_to_photo}`} alt={activity.alternative_activity} className="card-img-top activity-image" />
                <div className="overlay">
                  <Link to={`/alternative_activities/${activity.id}`} className="activity-name">{activity.alternative_activity}</Link>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{activity.alternative_activity}</h5>
                <p className="card-text">
                  <a href={activity.external_info} target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </p>
                <p className="card-text">Created at: {new Date(activity.created_at).toLocaleString()}</p>
                <p className="card-text">Updated at: {new Date(activity.updated_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alternatives;
