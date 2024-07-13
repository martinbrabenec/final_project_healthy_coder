import React from 'react';
import '../../../css/sidebar.scss'; // Import specific styles for Sidebar

const Sidebar = ({ visible, setVisible }) => (
  <div className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
    <button onClick={() => setVisible(!visible)} className="btn btn-primary">
      {visible ? 'Hide Sidebar' : 'Show Sidebar'}
    </button>
    <div className="sidebar-buttons">
      <button className="btn btn-secondary">Button 1</button>
      <button className="btn btn-secondary">Button 2</button>
      <button className="btn btn-secondary">Button 3</button>
      <button className="btn btn-secondary">Button 4</button>
      <button className="btn btn-secondary">Button 5</button>
    </div>
  </div>
);

export default Sidebar;
