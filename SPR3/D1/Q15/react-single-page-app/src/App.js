import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <div style={styles.page}><h1>Welcome to Home</h1></div>;
      case 'about':
        return <div style={{ ...styles.page, backgroundColor: '#ffe4b5' }}><h1>About Us</h1></div>;
      case 'contact':
        return <div style={{ ...styles.page, backgroundColor: '#d1ecf1' }}><h1>Contact Us</h1></div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav style={styles.navbar}>
        <button style={styles.link} onClick={() => setActivePage('home')}>Home</button>
        <button style={styles.link} onClick={() => setActivePage('about')}>About</button>
        <button style={styles.link} onClick={() => setActivePage('contact')}>Contact</button>
      </nav>

      <main style={styles.main}>
        {renderContent()}
      </main>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#222',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  link: {
    backgroundColor: '#444',
    color: '#fff',
    border: '1px solid #555',
    padding: '10px 20px',
    fontSize: '15px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  main: {
    marginTop: '30px',
    textAlign: 'center',
  },
  page: {
    backgroundColor: '#f8f9fa',
    padding: '50px',
    borderRadius: '12px',
    margin: '0 auto',
    maxWidth: '600px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }
};


export default App;
