import React, { useState } from 'react';

const Contact = () => {
  // 1. Initialized with all fields as empty strings
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    message: ''
  });
  
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        // Reset to original object with all fields defined
        setFormData({ 
          fullName: '', 
          email: '', 
          companyName: '', 
          message: '' 
        }); 
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        autoComplete="name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        autoComplete="organization"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      <button type="submit">Send</button>
      
      {status && <p>{status}</p>}
    </form>
  );
};

export default Contact;