// src/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send to an API)
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Contact Us</h1>
      </header>
      <main style={styles.main}>
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>     </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Our Contact Page</p>
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
  },
  header: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    width: '100%',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: 'auto',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  contactInfo: {
    marginTop: '20px',
    textAlign: 'left',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
};

export default ContactPage;
