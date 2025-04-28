// src/components/Header.tsx
import logo from "../assets/images/emocoin.png"; 
import './header.css'; // Importa o arquivo CSS

const Header = () => {
  return (
    <header className="header">
      {/* Esquerda: Logo + Título */}
      <div className="header-left">
        <img src={logo} alt="Emocoin logo" className="logo" />
        <h1 className="title">Emocoin</h1>
      </div>

      {/* Direita: Seções */}
      <nav className="nav">
        <p className="nav-item">Home</p>
        <p className="nav-item">What is Emocoin?</p>
        <p className="nav-item">Community</p>
      </nav>
    </header>
  );
};

export default Header;
