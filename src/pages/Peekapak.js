import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, SlideshowComponent, KeyTakeawaysComponent } from '../components/PageComponents';
import styles from '../SCSS/Main.module.scss';

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
        <div className={ styles.siteWrapper }>
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
