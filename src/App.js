import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import HireMePwease from './pages/HireMePwease';
import Website from './pages/Website';
import FowlPlay from './pages/FowlPlay';
import Peekapak from './pages/Peekapak';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/Peekapak' component={ Peekapak } />
        <Route path='/HireMePwease' component={ HireMePwease } />
        <Route path='/Website' component={ Website } />
        <Route path='/FowlPlay' component={ FowlPlay } />
      </div>
    );
  }
}

export default App;
