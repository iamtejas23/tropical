// Footer.js

import React from 'react';
import './footer.css';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <h2 className="discount-tagline">Special Discount Today!</h2>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
          eu pharetra nec, mattis ac neque.
        </p>
        <Link className="links">
          <a href="#Home">Privacy Policy</a>
          <a href="#Home">Terms of Service</a>
          <a href="#Home">Shipping Policy</a>
          <a href="#Home">Refund Policy</a>
          <a href="#Home">Contact Us</a>
          <a href="#Home">About Us</a>
          <a href="#Home">FAQ</a>
          <a href="#Home">Blog</a>
          <a href="#Home">Sitemap</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
