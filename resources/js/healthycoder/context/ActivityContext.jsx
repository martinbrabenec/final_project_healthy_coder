import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ActivityContext = createContext();

export const useActivityContext = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
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
    <ActivityContext.Provider value={{
      activities,
      filteredActivities,
      selectedZone,
      handleActivitySelect
    }}>
      {children}
    </ActivityContext.Provider>
  );
};