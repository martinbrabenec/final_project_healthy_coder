import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../css/activities.scss';
import HeartIcon from '../components/HeartIcon';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [likedActivities, setLikedActivities] = useState({});

  useEffect(() => {
    axios.get('/api/activities')
      .then(response => {
        setActivities(response.data);
        // Initialize liked state from localStorage or an empty object
        const savedLikes = JSON.parse(localStorage.getItem('likedActivities')) || {};
        setLikedActivities(savedLikes);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  const toggleLike = (activityId) => {
    setLikedActivities(prevLiked => {
      const newLiked = { ...prevLiked };
      if (newLiked[activityId]) {
        delete newLiked[activityId];
      } else {
        newLiked[activityId] = true;
      }
      // Save to localStorage
      localStorage.setItem('likedActivities', JSON.stringify(newLiked));
      return newLiked;
    });
  };

  return (
    <div className="container">
      <h2 className="my-4">All Activities</h2>
      <div className="row">
        {activities.map(activity => {
          const imageUrl = `/assets/activities/${activity.image.split('/').pop()}`;
          const googleSearchUrl = `https://www.google.com/search?q=tell me more about ${activity.name}. how it can improve my health and how can i get started?`;

          return (
            <div className="col-md-3 col-sm-6 mb-4" key={activity.id}>
              <div className="card h-100">
                <div className="image-container">
                  <img src={imageUrl} alt={activity.name} className="card-img-top activity-image" />
                  <div className="overlay">
                    <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer" className="activity-name">{activity.name}</a>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">{activity.name}</h5>
                  <div className="like-button-container">
                    <HeartIcon 
                      filled={!!likedActivities[activity.id]}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(activity.id);
                      }}
                    />
                  </div>
                </div>
                <div className="card-body">
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
