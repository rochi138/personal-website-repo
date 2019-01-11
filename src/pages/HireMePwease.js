import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, AwardsComponent, ProgressComponent, MeetTheTeamComponent, KeyTakeawaysComponent } from '../components/PageComponents';
import styles from '../SCSS/Main.module.scss';

export default class HireMePwease extends Component{
  constructor( props ) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    const pageMeta = require('./HireMePwease.json');
    return(
      <MainLayout {...this.props} >
        <div className={ styles.siteWrapper }>
          <ProjectSummary
            source={ pageMeta.ProjectSummary }
          />
          <AwardsComponent
            source={ pageMeta.Awards }
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
