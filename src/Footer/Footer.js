import React from 'react';
import loveIcon from '../loveIcon.png';
import './Footer';
  

export default function Footer() {
    return (
        <Footer>
            <p>
                Made with love <img src={loveIcon} alt="logo" className="footer" /> by Phelimon.
            </p>
        </Footer>
      
    );
  }