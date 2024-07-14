import React, { useState, useEffect } from 'react';
import '../../../css/sidebar.scss';

const Sidebar = () => {
  const [activities, setActivities] = useState([]);
  const [selectedZone, setSelectedZone] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const encodedZone = encodeURIComponent(selectedZone);
        const response = await fetch(`/api/activities?body_zone=${encodedZone}`);
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, [selectedZone]);

  const handleButtonClick = (zone) => {
    setSelectedZone(zone);
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
      <div className="activities-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
