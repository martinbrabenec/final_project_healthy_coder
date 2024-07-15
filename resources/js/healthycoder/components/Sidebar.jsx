import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/sidebar.scss';

const Sidebar = ({ onActivitySelect }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get('/api/activities');
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const handleButtonClick = (bodyZone) => {
    if (typeof onActivitySelect === 'function') {
      const filtered = activities.filter(activity => activity.body_zone === bodyZone);
      onActivitySelect(filtered, bodyZone);
    } else {
      console.error('onActivitySelect is not a function');
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-buttons">
        <button className="btn btn-custom" onClick={() => handleButtonClick('Hand & Wrist')}>Hand & Wrist</button>
        <button className="btn btn-custom" onClick={() => handleButtonClick('Neck & Upper Body')}>Neck & Upper Body</button>
        <button className="btn btn-custom" onClick={() => handleButtonClick('Posture & Sitting')}>Posture & Sitting</button>
        <button className="btn btn-custom" onClick={() => handleButtonClick('Head & Eyes')}>Head & Eyes</button>
        <button className="btn btn-custom" onClick={() => handleButtonClick('Lower Body')}>Lower Body</button>
        <button className="btn btn-custom" onClick={() => handleButtonClick('General')}>General</button>
      </div>
    </div>
  );
};

export default Sidebar;