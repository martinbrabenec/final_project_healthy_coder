import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(true);
  let timeout;

  useEffect(() => {
    const handleMouseMove = () => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 3000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <footer className={`footer mt-auto py-3 bg-light ${visible ? 'visible' : ''}`}>
      <div className="container text-center">
        <span className="text-muted">© 2023 Healthy Coder App. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;