import React from 'react';
import '../../../css/sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar-buttons">
      <button className="btn btn-custom">Hand & Wrist</button>
      <button className="btn btn-custom">Neck & Upper Body</button>
      <button className="btn btn-custom">Posture & Sitting</button>
      <button className="btn btn-custom">Head & Eyes</button>
      <button className="btn btn-custom">Lower Body</button>
      <button className="btn btn-custom">General</button>
    </div>
  );
};

export default Sidebar;
