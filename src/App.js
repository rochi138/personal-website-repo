import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import ProjectPage from './components/ProjectPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/Peekapak' render={(props) => <ProjectPage fileName='Peekapak' {...props} />} />
        <Route path='/HireMePwease' render={(props) => <ProjectPage fileName='HireMePwease' {...props} />} />
        <Route path='/Website' render={(props) => <ProjectPage fileName='Website' {...props} />} />
        <Route path='/FowlPlay' render={(props) => <ProjectPage fileName='FowlPlay' {...props} />} />
      </div>
    );
  }
}

export default App;
