import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ProjectSummary, SlideshowComponent, ProgressComponent, MeetTheTeamComponent, KeyTakeawaysComponent } from '../components/PageComponents';

export default class Website extends Component{
  constructor( props ) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){

    const pageMeta = require('./Website.json');

    return(
      <MainLayout {...this.props} >
        <div style={{ width: "80vw", margin: "auto", paddingRight: "8em", paddingLeft: "8em" }}>
          <ProjectSummary
            source={ pageMeta.ProjectSummary }
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
          <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
            <h2>Future Features</h2>
            <p><ul>
                    <li>HTML
                    <ul>
                            <li>Spinner</li>
                            <li>Default fonts</li>
                            <li>Font Awesome Icons</li>
                    </ul>
                    </li>
                    <li>Enable e-mailing ability</li>
                    <li>Templating
                    <ul>
                            <li>Template project pages</li>
                            <li>Dark mode</li>
                    </ul>
                    </li>
                    <li>JSON Editor
                    <ul>
                            <li>use draft-js</li>
                            <li>can create new JSON file</li>
                            <li>can load current JSON file</li>
                            <li>can edit current JSON file</li>
                            <li>can save edited JSON file</li>
                            <li>can use calendar import to fill in dates</li>
                    </ul>
                    </li>
                    <li>Project arrows (go left and right through all projects)</li>
                    <li>Draws all files and sorts them by latest update date. Displays them in that order.</li>
                    <li>Mobile
                    <ul>
                            <li>Reformat all tables</li>
                    </ul>
                    </li>
            </ul></p>
          </div>
        </div>
      </MainLayout>
      );
  }
}