import React from 'react';
import '../../../css/footer.scss'; 

const Footer = ({ children }) => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">Healthy Coder App &copy; 2024</span>
      {children}
    </div>
  </footer>
);

export default Footer;
