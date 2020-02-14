import React from 'react';
import './RotatingBox.css';
import four from './four.png';
import Snowfall from 'react-snowfall';
import Footer from './Footer/Footer';
import { NavLink, BrowserRouter } from 'react-router-dom';

export default function RotatingBox() {
    return (
        <div>
        <header className="App-header">
        <Snowfall />
        <NavLink to="/surprise">
        <img src={four} className="App-logo" alt="logo" />
        </NavLink>
        <p className="firstText">
          Hold on tight!
        </p>
         <p className="text">
         Phelimon has something amazing for you!<br/>
          Click on the box above to unveil it!
         </p>
  
      </header>
      {/* <Footer/> */}
      </div>
    );
  }