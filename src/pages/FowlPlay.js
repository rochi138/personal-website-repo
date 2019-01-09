import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, AwardsComponent, SlideshowComponent, ProgressComponent, MeetTheTeamComponent, KeyTakeawaysComponent } from '../components/PageComponents';

export default class FowlPlay extends Component{
  constructor( props ) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    const pageMeta = require('./FowlPlay.json');
    return(
      <MainLayout {...this.props} >
        <div style={{ width: "80vw", margin: "auto", paddingRight: "8em", paddingLeft: "8em" }}>
          <ProjectSummary
            source={ pageMeta.ProjectSummary }
          />
          <AwardsComponent
            source={ pageMeta.Awards }
          />
          <SlideshowComponent
            source={ pageMeta.Slideshow }
          />
          <ProgressComponent
            source={ pageMeta.ProgressComponent }
          />
          <MeetTheTeamComponent
            source={ pageMeta.MeetTheTeamComponent }
          />
          <KeyTakeawaysComponent
            source={ pageMeta.KeyTakeawaysComponent }
          />
        </div>
      </MainLayout>
      );
  }
}
