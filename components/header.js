import React from 'react';

const headerStyle = {
  padding: '1rem',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
};

const navStyle = {
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#333',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Mon Application Markdown</h1>
      <nav>
        <a href="/" style={navStyle}>Accueil</a>
        <a href="/about" style={navStyle}>À propos</a>
      </nav>
    </header>
  );
};

export default Header;
