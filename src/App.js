import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RotatingBox from './RotatingBox';
import Surprise from './Surprise/Surprise';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={RotatingBox}/>
      <Route path="/surprise" component={Surprise}/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
