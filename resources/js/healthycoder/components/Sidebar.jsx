import React from 'react';

const Sidebar = ({ visible, setVisible }) => {
  const toggleSidebar = () => setVisible(!visible);

  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      <button onClick={toggleSidebar} className="btn btn-primary mb-3">
        {visible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      {visible && (
        <div className="d-flex flex-column">
          <button className="btn btn-secondary mb-2">Button 1</button>
          <button className="btn btn-secondary mb-2">Button 2</button>
          <button className="btn btn-secondary mb-2">Button 3</button>
          <button className="btn btn-secondary mb-2">Button 4</button>
          <button className="btn btn-secondary mb-2">Button 5</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;