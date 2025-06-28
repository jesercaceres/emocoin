import React, { useState, useEffect } from "react";
import logo from "../assets/images/headerImgs/emocoin.png";
import "./header.css";
import { locoInstance } from "../hooks/useLocoScroll";

const Header: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (locoInstance) {
      locoInstance.scrollTo(selector, {
        offset: -60,
        duration: 800,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  return (
    <header className={`header ${isShrunk ? "shrink" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <img src={logo} alt="EmoCoin logo" className="logo" />
          <h1 className="title">EmoCoin</h1>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>Home</a>
          <a href="#whatis" onClick={(e) => handleNavClick(e, "#whatis")}>What is EmoCoin?</a>
          <a href="#tokenomics" onClick={(e) => handleNavClick(e, "#tokenomics")}>Tokenomics</a>
          <a href="#howToBuy" onClick={(e) => handleNavClick(e, "#howToBuy")}>How To Buy</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
