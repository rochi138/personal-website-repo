import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import stylesHome from '../SCSS/HomePage.module.scss';
import { Button, Row, Col } from 'reactstrap';

export default class Home extends Component{
  constructor( props ) {
    super();

    var source=require('./HomePage.json');
    var interestStates = [];
    source.interests.forEach(function(element) {
      interestStates.push( false );
    });

    if ( source.projects.length > 6 ) {
      source.projectsMore= source.projects.slice( 6, source.projects.length );
      source.projects= source.projects.slice( 0, 6 );
    }

    this.state={
      source: source,
      showProjects: false,
      showSYDE: false,
      interestStates: interestStates
    }

    this.readMore = this.readMore.bind( this );
    this.readMoreInterests = this.readMoreInterests.bind( this );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  readMore( id ) {
    this.setState(prevState => ({ 
      ["show"+id]: !prevState["show"+id]
    }));
  }

  readMoreInterests( key ) {
    var interestStates = this.state.interestStates;
    interestStates[ key ] = !this.state.interestStates[ key ];
    this.setState({
      interestStates: interestStates
    });
  }

  render(){
    var source = this.state.source;

    //component ids can be set with variables
    const example = "about";

    //Animations are missing
    //Can use modal (from previous versions) in project pages
    return(
      <MainLayout isHome={ true } {...this.props } >
        <div>
          <div className={ `${ stylesHome.parallax } ${ stylesHome.bannerPic }` } id="home">
            <div className={ stylesHome.displayMiddle } >
              <div className={ stylesHome.name } >ROBYN CHING</div> 
            </div>
          </div>
          <div className={ stylesHome.sectionContainer} id={example}>
            <h3>ABOUT ME</h3>
            <div className={ stylesHome.subTitle }>Candidate for Systems Design Engineering Class 2022</div>
            <div className={ stylesHome.floatContainer }>
              <img src={ require( '../images/robynProfile.JPG' ) } class="w3-round w3-image" alt="Profile" style={{ width: "300px", height: "333px", objectFit: "contain", float: "left" }} />
              <div dangerouslySetInnerHTML={ { __html: source.aboutMe.text } }/>
            </div>
            <Button className={ stylesHome.resumeButton } style={{ backgroundColor: "#ccc", border: "none" }}>
              <a class="w3-button w3-padding-large w3-light-grey" style={{marginTop: "64px", color: "black" }} href="https://github.com/rochi138/personal-website-repo/raw/master/src/documents/Robyn%20Ching%20-%20Resume%202018%20Co-op.pdf" target="_blank" rel="noopener noreferrer">Haven't seen my resume yet? Take a quick look!</a>
            </Button>
          </div>
          <div className={ stylesHome.sectionContainer} id="whatissyde" style={{paddingTop: "0"}}>
            <h3>WHAT IS SYSTEMS DESIGN ENGINEERING?</h3>
            <div className={ stylesHome.subTitle }>Systems is how we know the world. Design is how we change it.</div>
            { this.state.showSYDE &&
              <div dangerouslySetInnerHTML={ { __html: source.SYDE.text } }/>
            }
            <Button onClick={ () => this.readMore("SYDE") } style={{ backgroundColor: "#ccc", border: "none", color: "black" }}>
              { this.state.showSYDE ? "Show Less" : "Read More"}
            </Button>
          </div>
          <div className={ `${ stylesHome.parallax } ${ stylesHome.projectsPic }` } >
            <div className={ stylesHome.displayMiddle }>
              <span className={ stylesHome.sectionName } >PROJECTS</span>
            </div>
          </div>
          <div className={ stylesHome.sectionContainer} id="projects">
            <h3>MY WORK</h3>
            <div className={ stylesHome.subTitle }>Previous work and personal projects.<br /> Click for the project's page</div>
            <Row>
              { source.projects.map( ( project, i ) =>
                <Col sm={ 6 } md={ 4 } key={ i } onClick={ () => this.props.history.push( '/' + project.link ) }>
                  <div style={{height: "16em", width: "100%", textAlign: "center"}} >
                    <span style={{height: "100%", display: "inline-block", verticalAlign: "middle"}}></span>
                    <img src={ require('../images/' + project.image + '.jpg' ) } style={{width: "90%", height: "100%", verticalAlign: "middle", objectFit: "contain"}} alt={ project.alt } />
                  </div>
                  <div style={{height: "5em", display: "flex", flexDirection: "column", alignItems: "center"}} >
                    <h4>{ project.name }</h4>
                    <p>{ project.description }</p>
                  </div>
                </Col>
              ) }
              { ( this.state.showProjects && source.projectsMore ) && source.projectsMore.map( ( project, i ) =>
                <Col sm={ 6 } md={ 4 } key={ i } onClick={ () => this.props.history.push( '/' + project.link ) }>
                  <div style={{height: "16em", width: "100%", textAlign: "center"}} >
                    <span style={{height: "100%", display: "inline-block", verticalAlign: "middle"}}></span>
                    <img src={ require('../images/' + project.image + '.jpg' ) } style={{width: "90%", height: "100%", verticalAlign: "middle", objectFit: "contain"}} alt={ project.alt } />
                  </div>
                  <div style={{height: "5em", display: "flex", flexDirection: "column", alignItems: "center"}} >
                    <h4>{ project.name }</h4>
                    <p>{ project.description }</p>
                  </div>
                </Col>
              ) }
            </Row>
            { source.projectsMore && 
              <Button onClick={ () => this.readMore("Projects") } style={{ backgroundColor: "#ccc", border: "none", color: "black" }}>
                { this.state.showProjects ? "Show Less" : "Load More"}
              </Button>
            }
          </div>
          <div className={ `${ stylesHome.parallax } ${ stylesHome.contactPic }` }>
            <div className={ stylesHome.displayMiddle }>
              <span className={ stylesHome.sectionName } >CONTACT</span>
            </div>
          </div>
          <div className={ stylesHome.sectionContainer} id="contact">
            <h3>Question? Comments? Concerns?</h3>
            <div className={ stylesHome.subTitle }>Let me know and I'll get back to you!</div>

            <div class="w3-row w3-padding-32 w3-section" id="div-container">
              <div class="w3-large w3-margin-bottom w3-center" style={ { textAlign: "center" }}>
                <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: rjching@uwaterloo.ca<br />
              </div>
            </div>
          </div>
          <div className={ `${ stylesHome.parallax } ${ stylesHome.interestsPic }` }>
            <div className={ stylesHome.displayMiddle }>
              <span className={ stylesHome.sectionName } >INTERESTS</span>
            </div>
          </div>
          <div className={ stylesHome.sectionContainer} id="interests">
            <h3>OUTSIDE OF OFFICE HOURS</h3>
            <div className={ stylesHome.subTitle }>Conversation Starters <br />Things Nobody Asked For<br />Weak Flexes</div>
            <Row>
              { source.interests.map( ( interest, i ) =>
                <Col md={ this.state.interestStates[ i ] ? 12: 3 } sm={ this.state.interestStates[ i ] ? 12: 4 } xs={ this.state.interestStates[ i ] ? 12: 6 } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    { this.state.interestStates[ i ] ?
                      <div className={ `${ stylesHome.interests } ${ stylesHome.floatContainer }` }> 
                        <img src={ require('../images/' + interest.image + '.jpg' ) } class="w3-round w3-image" alt={ interest.alt } style={{ width: "200px", height: "auto", objectFit: "contain", float: "left", padding: "1em" }} />
                        <h4>{ interest.brief }</h4>
                        <div dangerouslySetInnerHTML={ { __html: interest.content } }/>
                      </div> :
                      <div>
                        <div style={{height: "10em", width: "100%", textAlign: "center"}} >
                          <span style={{height: "100%", display: "inline-block", verticalAlign: "middle"}}></span>
                          <img src={ require('../images/' + interest.image + '.jpg' ) } style={{width: "90%", height: "100%", verticalAlign: "middle", objectFit: "contain"}} alt={ interest.alt } />
                        </div>
                        <div style={{height: "2.5em", display: "flex", flexDirection: "column", alignItems: "center"}} >
                          <h4>{ interest.brief }</h4>
                        </div>
                      </div>
                    }
                  <Button onClick={ () => this.readMoreInterests( i ) }>
                    { this.state.interestStates[ i ] ? "Show Less" : "Read More"}
                  </Button>
                </Col>
              ) }
            </Row>
          </div>
        </div>
      </MainLayout>
      );
  }
}
