import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './SCSS/App.scss';
import Home from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { ProjectList } from './components/Constants';

class App extends Component {
  constructor(props) {
		super();

		this.state={
      theme: "default",
		}
  }

  componentDidMount() {
    var rawProjectList = [];
    ProjectList.map(( i ) => {
      var pageMeta = require('./components/Project JSONs/' + i + '.json');
      var date = "";
      if ( pageMeta.work )
        date = pageMeta.work.date;
      else
        pageMeta.components.map((i) => {
          if ( i.title == "Progress" )
            date = i.list[0].left;
        })
      rawProjectList.push({ projectName: i, date: date })
    })
    var projectList=[ rawProjectList[0] ];
    const rlength = rawProjectList.length;
    for ( var i = 1; i < rlength; ++i ){
      const length = projectList.length;
      var added = false;
      for ( var ii = 0; ii < length; ++ii ){
        if ( rawProjectList[ i ].date > projectList[ ii ].date ){
          projectList.splice(ii, 0, rawProjectList[ i ] )
          added = true;
          break;
        }
      }
      if ( !added ) projectList.push(rawProjectList[ i ])
    }
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={(props) => <Home state={this.state} {...props} setState={ (state) => this.setState( state ) }/>} />
        { ProjectList.map((i) => 
          <Route path={ '/'+ i } key={i} render={(props) => <ProjectPage fileName={i} state={this.state} {...props} setState={ (state) => this.setState( state ) } />} />
        )}
      </div>
    );
  }
}

export default App;
