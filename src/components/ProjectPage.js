import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, AwardsComponent, SlideshowComponent, ProgressComponent, MeetTheTeamComponent, KeyTakeawaysComponent } from '../components/PageComponents';

const componentsList = {
    ProjectSummary: ProjectSummary,
    AwardsComponent: AwardsComponent,
    SlideshowComponent: SlideshowComponent,
    ProgressComponent: ProgressComponent,
    MeetTheTeamComponent: MeetTheTeamComponent,
    KeyTakeawaysComponent: KeyTakeawaysComponent
  }

export default class ProjectPage extends Component{
  constructor( props ) {
    super( props );

    this.state ={
      pageMeta: require('../pages/' + this.props.fileName + '.json')
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentRender( component ) {
    const ComponentName = componentsList[ component.componentName ];
    return <ComponentName source={ component } />
  }
  
  render(){
    const pageMeta = this.state.pageMeta;
    return(
      <MainLayout {...this.props} >
        <div style={{ width: "80vw", margin: "auto", paddingRight: "8em", paddingLeft: "8em" }}>
          { pageMeta.components.map( ( component, i ) =>
            <div>
              { this.componentRender( component ) }
            </div>
          ) }
        </div>
      </MainLayout>
      );
  }
}
