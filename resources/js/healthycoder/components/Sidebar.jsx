import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/sidebar.scss';

const Sidebar = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);

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
    setSelectedZone(bodyZone);
    const filtered = activities.filter(activity => activity.body_zone === bodyZone);
    setFilteredActivities(filtered);
  };

  const renderActivities = () => {
    if (!selectedZone) return null;
    
    return (
      <div className="filtered-activities">
        <h3>{selectedZone} Activities</h3>
        <ul>
          {filteredActivities.map(activity => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
    );
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
      {renderActivities()}
    </div>
  );
};

export default Sidebar;