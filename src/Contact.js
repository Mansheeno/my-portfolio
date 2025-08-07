import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>Feel free to reach out to me through the following channels:</p>
      <div className="contact-links">
        <a href="//www.facebook.com/djmansheeno" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ marginRight: '8px' }} /> Facebook
        </a>
        <a href="https://twitter.com/djmansheeno" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ marginRight: '8px' }} /> Twitter
        </a>
        <a href="https://github.com/mansheeno" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ marginRight: '8px' }} /> GitHub
        </a>
        <a href="tel:+2348146233546">
          <FaPhone style={{ marginRight: '8px' }} /> +234 814 623 3546
        </a>
      </div>
    </section>
  );
}

export default Contact;
