import React from 'react';

const ActivityList = ({ activities, selectedZone }) => {
  if (!selectedZone || activities.length === 0) return null;

  return (
    <div className="filtered-activities">
      <h3>{selectedZone} Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;