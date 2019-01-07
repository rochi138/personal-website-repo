import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, SlideshowComponent, KeyTakeawaysComponent } from '../components/PageComponents';

export default class Peekapak extends Component{
  constructor(props) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    const pageMeta = require('./Peekapak.json');
    return(
      <MainLayout {...this.props} >
        <div style={{ width: "80vw", margin: "auto", paddingRight: "8em", paddingLeft: "8em" }}>
          <ProjectSummary
            source={ pageMeta.ProjectSummary }
          />
          <SlideshowComponent
            source={ pageMeta.Slideshow }
          />
          <KeyTakeawaysComponent
            source={ pageMeta.KeyTakeawaysComponent }
          />
        </div>
      </MainLayout>
    );
  }
}
