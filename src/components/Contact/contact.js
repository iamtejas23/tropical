// ContactSection.js
import React from 'react';
import './contact.css';
import con from '../../assets/image 41.png';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <img
          src={con}
          alt="Contact"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="contact-right">
        <h2>Contact Us</h2>
        <form>
          {/* Add your form fields here */}
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
