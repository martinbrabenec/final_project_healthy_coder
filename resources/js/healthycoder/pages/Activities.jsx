import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <Link to={`${activity.id}`}>{activity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
