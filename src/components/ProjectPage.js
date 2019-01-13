import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, AwardsComponent, SlideshowComponent, ProgressComponent, MeetTheTeamComponent, KeyTakeawaysComponent } from '../components/PageComponents';

export default class ProjectPage extends Component{
  constructor( props ) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    const pageMeta = require('../pages/' + this.props.fileName + '.json');
    return(
      <MainLayout {...this.props} >
        <div style={{ width: "80vw", margin: "auto", paddingRight: "8em", paddingLeft: "8em" }}>
          <ProjectSummary
            source={ pageMeta.components[ 0 ] }
          />
          <AwardsComponent
            source={ pageMeta.components[ 1 ] }
          />
          <SlideshowComponent
            source={ pageMeta.components[ 2 ].slideshow }
          />
          <ProgressComponent
            source={ pageMeta.components[ 3 ] }
          />
          <MeetTheTeamComponent
            source={ pageMeta.components[ 4 ] }
          />
          <KeyTakeawaysComponent
            source={ pageMeta.components[ 5 ] }
          />
        </div>
      </MainLayout>
      );
  }
}
