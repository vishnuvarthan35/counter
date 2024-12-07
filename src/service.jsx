// src/ServicePage.js
import React from 'react';

const ServicePage = () => {
  const services = [
    { name: 'Web Development', description: 'Building responsive websites.' },
    { name: 'Mobile App Development', description: 'Creating mobile applications.' },
    { name: 'SEO Optimization', description: 'Improving search engine visibility.' },
  ];

  return (
    <>
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Our Services</h1>
      </header>
      <main style={styles.main}>
        <h2>What We Offer</h2>
        <ul style={styles.list}>
          {services.map((service, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Our Company</p>
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
    backgroundColor: '#e0e0e0',
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
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
};

export default ServicePage;
