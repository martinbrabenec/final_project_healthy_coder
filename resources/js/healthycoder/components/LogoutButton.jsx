import React from 'react';
import axios from 'axios';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      
      await axios.post('/logout', {}, {
        headers: {
          'X-CSRF-Token': csrfToken,
        },
        withCredentials: true,
      });

      onLogout();
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <button className="btn btn-link" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
