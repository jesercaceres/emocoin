// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import logo from "../assets/images/headerImgs/emocoin.png";
import "./header.css";

const Header: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // quando passar de 50px de scroll, ativa shrink
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isShrunk ? "shrink" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="EmoCoin logo" className="logo" />
        <h1 className="title">EmoCoin</h1>
      </div>
      <nav className="nav">
        <a href="#hero" className="nav-item">Home</a>
        <a href="#whatis" className="nav-item">What is EmoCoin?</a>
        <a href="#tokenomics" className="nav-item">Tokenomics</a>
        <a href="#tokenomics" className="nav-item">How to Buy</a>
      </nav>
    </header>
  );
};

export default Header;
