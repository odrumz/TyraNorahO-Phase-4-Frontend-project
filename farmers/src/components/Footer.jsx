import React from 'react';
import "../Footer.css";  

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <h1>About us</h1>
        <p>
          The Farmers Market connects customers with local vendors, providing easy access to fresh, local products. We aim to support local businesses and promote healthy eating in society ✨.
        </p>
      </div>
      <div className='footer-section'>
        <h1>Find us</h1>
        <p>Email: <a href="mailto:FMarket@gmail.com">FMarket@gmail.com</a></p>
        <p>Contact us: <a href="tel:+0712345678">0712345678</a></p>
        <p>Twitter: <a href="https://twitter.com/FM_market" target="_blank" rel="noopener noreferrer">@FM_market</a></p>
        <p>Facebook: <a href="https://facebook.com/FM_market" target="_blank" rel="noopener noreferrer">FM.market</a></p>
        <p>Instagram: <a href="https://instagram.com/FM_market" target="_blank" rel="noopener noreferrer">@FM.market</a></p>
      </div>
    </div>
  );
}

export default Footer;
