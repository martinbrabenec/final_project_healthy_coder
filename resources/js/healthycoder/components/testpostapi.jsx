import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestPostAPI = () => {
  const [newActivity, setNewActivity] = useState({
    name: '',
    description: '',
    activity_type: 'coder',
    body_zone: 'General',
    image: ''
  });

  useEffect(() => {
    // Update image path whenever name changes
    if (newActivity.name) {
      const imagePath = `ASSETS/activities/${newActivity.name.toLowerCase().replace(/\s+/g, '_')}.jpg`;
      setNewActivity(prev => ({ ...prev, image: imagePath }));
    }
  }, [newActivity.name]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://www.thehealthycoder.test/api/activities/create', newActivity);
      console.log('Activity created:', response.data);
      alert('Activity created successfully!');
      
      setNewActivity({
        name: '',
        description: '',
        activity_type: 'coder',
        body_zone: 'General',
        image: ''
      });
    } catch (error) {
      console.error('Error creating activity:', error);
      alert('Failed to create activity. Please try again.');
    }
  };

  return (
    <div>
      <h2>Test Post API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newActivity.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newActivity.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="activity_type">Activity Type:</label>
          <select
            id="activity_type"
            name="activity_type"
            value={newActivity.activity_type}
            onChange={handleInputChange}
          >
            <option value="coder">Coder</option>
            <option value="sport">Sport</option>
          </select>
        </div>
        <div>
          <label htmlFor="body_zone">Body Zone:</label>
          <select
            id="body_zone"
            name="body_zone"
            value={newActivity.body_zone}
            onChange={handleInputChange}
          >
            <option value="Posture & Sitting">Posture & Sitting</option>
            <option value="Neck & Upper Body">Neck & Upper Body</option>
            <option value="Hand & Wrist">Hand & Wrist</option>
            <option value="Head & Eyes">Head & Eyes</option>
            <option value="Lower Body">Lower Body</option>
            <option value="General">General</option>
          </select>
        </div>
        <div>
          <label>Image Path:</label>
          <p>{newActivity.image}</p>
        </div>
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default TestPostAPI;