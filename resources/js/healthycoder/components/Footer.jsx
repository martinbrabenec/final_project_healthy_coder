import React from 'react';
import '../../../css/footer.scss'; // Import specific styles for Footer

const Footer = ({ onLogout }) => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">Healthy Coder App &copy; 2024</span>
      <button className="btn btn-link" onClick={onLogout}>Logout</button>
    </div>
  </footer>
);

export default Footer;

