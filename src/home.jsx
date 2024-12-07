// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  return (<>
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Home Page</h1>
      </header>
      <main style={styles.main}>
        <h2>About Me</h2>
        <p>This is a simple home page built with React. You can add more content here!</p>
        <button style={styles.button}>Learn More</button>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 My Home Page</p>
      </footer>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    width: '100%',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#008CBA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default HomePage;
