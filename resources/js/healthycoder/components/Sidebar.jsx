import React, { useState, useEffect } from 'react';
import '../../../css/sidebar.scss';

const Sidebar = ({ onSelectZone }) => {
  const handleButtonClick = (zone) => {
    onSelectZone(zone);
  };

  return (
    <div className="sidebar-buttons">
      <button className="btn btn-custom" onClick={() => handleButtonClick('Hand & Wrist')}>Hand & Wrist</button>
      <button className="btn btn-custom" onClick={() => handleButtonClick('Neck & Upper Body')}>Neck & Upper Body</button>
      <button className="btn btn-custom" onClick={() => handleButtonClick('Posture & Sitting')}>Posture & Sitting</button>
      <button className="btn btn-custom" onClick={() => handleButtonClick('Head & Eyes')}>Head & Eyes</button>
      <button className="btn btn-custom" onClick={() => handleButtonClick('Lower Body')}>Lower Body</button>
      <button className="btn btn-custom" onClick={() => handleButtonClick('General')}>General</button>
    </div>
  );
};

export default Sidebar;
