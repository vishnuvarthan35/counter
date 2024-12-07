// src/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (<>
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About Our School</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Our Mission</h2>
          <p>
            At Our School, we strive to provide a nurturing environment that fosters academic excellence and personal growth.
            Our mission is to empower students to reach their full potential through innovative teaching and comprehensive support.
          </p>
        </section>
        <section style={styles.section}>
          <h2>Our Values</h2>
          <ul style={styles.list}>
            <li>Integrity</li>
            <li>Respect</li>
            <li>Collaboration</li>
            <li>Innovation</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2>Meet Our Staff</h2>
          <p>Our dedicated staff works tirelessly to create a positive learning environment:</p>
          <ul style={styles.list}>
            <li><strong>John Doe</strong> - Principal</li>
            <li><strong>Jane Smith</strong> - Vice Principal</li>
            <li><strong>Emily Johnson</strong> - Head of Science Department</li>
            <li><strong>Michael Brown</strong> - Head of Mathematics Department</li>
          </ul>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Our School</p>
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
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    width: '100%',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  section: {
    marginBottom: '20px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
};

export default AboutPage;
