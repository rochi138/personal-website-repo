import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './SCSS/App.scss';
import Home from './pages/HomePage';
import ProjectPage from './components/ProjectPage';

class App extends Component {
  constructor(props) {
		super();

		this.state={
			theme: "default"
		}
	}
  render() {
    return (
      <div>
        <Route exact path='/' render={(props) => <Home state={this.state} {...props} setState={ (state) => this.setState( state ) }/>} />
        <Route path='/Peekapak' render={(props) => <ProjectPage fileName='Peekapak' state={this.state} {...props} setState={ (state) => this.setState( state ) } />} />
        <Route path='/HireMePwease' render={(props) => <ProjectPage fileName='HireMePwease' state={this.state} {...props} setState={ (state) => this.setState( state ) } />} />
        <Route path='/Website' render={(props) => <ProjectPage fileName='Website' state={this.state} {...props} setState={ (state) => this.setState( state ) } />} />
        <Route path='/FowlPlay' render={(props) => <ProjectPage fileName='FowlPlay' state={this.state} {...props} setState={ (state) => this.setState( state ) } />} />
      </div>
    );
  }
}

export default App;
