import React, { Component } from 'react';
import { MainLayout } from '../components/MainLayout';
import stylesHome from '../SCSS/HomePage.module.scss';
import { Button, Row, Col } from 'reactstrap';

export default class Home extends Component{
  constructor( props ) {
    super();

    var source=require('./HomePage.json');
    source.projects = [];

    this.state={
      source: source,
      showProjects: false,
      showSYDE: false,
      showInterest: 0,
      hoverProject: undefined,
      hoverInterest: undefined,
    }

    this.readMore = this.readMore.bind( this );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  readMore( id ) {
    this.setState(prevState => ({ 
      ["show"+id]: !prevState["show"+id]
    }));
  }

  componentDidUpdate( prevProps ) {
    if ( !prevProps.state.projectList.length ){
      var source = this.state.source;
      if ( this.props.state.projectList.length > 6 ) {
        source.projectsMore= this.props.state.projectList.slice( 6, this.props.state.projectList.length );
        source.projects= this.props.state.projectList.slice( 0, 6 );
      } else {
        source.projects = this.props.state.projectList;
      }
      this.setState({source: source})
    }
  }

  render(){
    var source = this.state.source;
    var openInterest = source.interests[ this.state.showInterest ];

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
              <img src={ require( '../images/robynProfile2.JPG' ) } class="w3-round w3-image" alt="Profile" className={ stylesHome.profilePic } />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ textAlign: "left", marginBottom: "1em" }} dangerouslySetInnerHTML={ { __html: source.aboutMe.text } }/>
              <Button style={{ backgroundColor:"black", marginTop: "10px" }}>
              <a class="w3-button w3-padding-large w3-light-grey" style={{marginTop: "64px", color: "white" }} href="https://github.com/rochi138/personal-website-repo/raw/master/src/documents/Robyn%20Ching%20-%20Resume%202019%20Co-op.pdf" target="_blank" rel="noopener noreferrer">Haven't seen my resume yet?<br />Take a quick look!</a>
            </Button>
            </div>
            </div>
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
                <Col sm={ 6 } md={ 4 } key={ i } onClick={ () => this.props.history.push( '/' + project.projectName ) } onMouseEnter={ () => this.setState({ hoverProject: i })} onMouseLeave={ () => this.setState({ hoverProject: undefined })} style={ ( this.state.hoverProject !== undefined && i!== this.state.hoverProject ) ? {opacity: 0.4, cursor: "pointer"} : {opacity: 1, cursor: "pointer"}}>
                  <div style={{height: "16em", width: "100%", textAlign: "center"}} >
                    <span style={{height: "100%", display: "inline-block", verticalAlign: "middle"}}></span>
                    <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } style={{width: "90%", height: "100%", verticalAlign: "middle", objectFit: "contain"}} alt={ project.thumbnail.alt } />
                  </div>
                  <div style={{height: "5em", display: "flex", flexDirection: "column", alignItems: "center"}} >
                    <h4>{ project.thumbnail.name }</h4>
                    <p style={{textAlign: "center"}}>{ project.thumbnail.description }<br />{ project.thumbnail.date }</p>
                  </div>
                </Col>
              ) }
              { ( this.state.showProjects && source.projectsMore ) && source.projectsMore.map( ( project, i ) =>
                <Col sm={ 6 } md={ 4 } key={ i } onClick={ () => this.props.history.push( '/' + project.link ) }>
                  <div style={{height: "16em", width: "100%", textAlign: "center"}} >
                    <span style={{height: "100%", display: "inline-block", verticalAlign: "middle"}}></span>
                    <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } style={{width: "90%", height: "100%", verticalAlign: "middle", objectFit: "contain"}} alt={ project.thumbnail.alt } />
                  </div>
                  <div style={{height: "5em", display: "flex", flexDirection: "column", alignItems: "center"}} >
                    <h4>{ project.thumbnail.name }</h4>
                    <p style={{textAlign: "center"}}>{ project.thumbnail.description }<br />{ project.thumbnail.date }</p>
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
            <div className={ stylesHome.interestsWrapper }>
              <div className={ stylesHome.interestsBar }>
                { source.interests.map( ( interest, i ) =>
                  <div key={ i } className={ stylesHome.option } onClick={ () => this.setState({ showInterest: i }) } onMouseEnter={ () => this.setState({ hoverInterest: i })} onMouseLeave={ () => this.setState({ hoverInterest: undefined })} style={ ( this.state.hoverInterest !== undefined && i!== this.state.hoverInterest ) ? {opacity: 0.4} : {opacity: 1}}>
                    <img src={ require('../images/' + interest.image + '.jpg' ) } style={{width: "20%", height: "100%", objectFit: "contain", minWidth: "4em", padding: "5px"}} alt={ interest.alt } />
                    <div className={ `${ stylesHome.text } ${ stylesHome.hideMobile }` }>
                      <h4>{ interest.brief }</h4>
                    </div>
                  </div>
                ) }
              </div>
              <div className={ stylesHome.openInterests }>
                <img src={ require('../images/' + openInterest.image + '.jpg' ) } class="w3-round w3-image" alt={ openInterest.alt } style={{ width: "200px", height: "auto", objectFit: "contain", padding: "1em" }} />
                <div className={ stylesHome.text }>
                  <h4>{ openInterest.brief }</h4>
                  <div dangerouslySetInnerHTML={ { __html: openInterest.content } }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
