import React from "react";
import "./footer.css";
import logo from "../assets/images/headerImgs/emocoin.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Emocoin Logo" className="footer-logo" />
          <span className="footer-name">Emocoin</span>
        </div>

        <div className="footer-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="mailto:contato@emocoin.io">Contact</a>
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-copy">
          &copy; {year} | Emocoin Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
