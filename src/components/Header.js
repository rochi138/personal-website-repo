import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';
import { HomePageSections } from './Constants';

export default class Header extends Component{
  constructor( props ) {
    super();
    this.state={
      mobileOpen: false,
      projectOpen: false,
      projectList: props.state.projectList,
      i: props.i,
    }
    
    this.handleOnClick = this.handleOnClick.bind( this );

  }

  handleOnClick( id ) {
    this.setState({mobileOpen: false });
    if ( id === 'home' ) this.props.history.push('/');
    if ( !document.getElementById( id ) ) return null;
    document.getElementById( id ).scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var navBar = document.getElementById("myNavbar");
    var navDemo = document.getElementById("navDemo");
      if ( !document.body.scrollTop || !document.documentElement.scrollTop ) {
          navBar.className = `${ styles.bar } ${ styles.desktop } scroll`;
          navDemo.className = `${ styles.bar } ${ styles.mobile } scroll`;
      } else {
          navBar.className = `${ styles.bar } ${ styles.desktop } noScroll`;
          navDemo.className = `${ styles.bar } ${ styles.mobile } noScroll`;
      }
  }

  componentDidUpdate( prevProps ){
    if ( !prevProps.state.projectList.length ) 
      this.setState({projectList: this.props.state.projectList})
    if ( prevProps.i !== this.props.i )
      this.setState({i: this.props.i})
  }

  render(){
    const first = !this.state.projectList[0] ? false : !this.state.i;
    const last = !this.state.projectList[0] ? false : this.state.i === this.state.projectList.length -1;
    return(
      //plz for the love of god resrtucture this
      <div className={ `${ styles.header } header` }>
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.desktop } scroll` } id="myNavbar">
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
                { HomePageSections.map( ( section ) =>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( section.title ) }><i class={ section.icon } />{ section.title }</div>
                ) }
                <div style={{flex: 1}} />
                <ThemeToggle theme={ this.props.state.theme } setState={ this.props.setState } />
              </div>
            </div>
          : <div className={ `${ styles.bar } ${ styles.desktop } scroll` } id="myNavbar">
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
                <div style={{flex: 1}} />
                <ProjectNav toggleProjectOpen={ () => this.setState({ projectOpen: !this.state.projectOpen })} history={ this.props.history } projectList={ this.state.projectList } i={ this.state.i } first={ first } last={ last } />
                <div style={{flex: 1}} />
                <ThemeToggle theme={ this.props.state.theme } setState={ this.props.setState } />
              </div>
              <ProjectOpen projectOpen={ this.state.projectOpen } history={ this.props.history } projectList={ this.state.projectList } />
            </div>
        }
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.mobile } noScroll`} id="navDemo">
              <div className={ styles.bar }>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
                <div className={ styles.barItem } style={{flex: 1}} onClick={ () => this.setState(prevState => ({mobileOpen: !prevState.mobileOpen })) }><i class={ this.state.open ? "fa fa-chevron-up" : "fa fa-chevron-down" }/></div>
                <ThemeToggle theme={ this.props.state.theme } setState={ this.props.setState } isMobile={ true } />
              </div>
              <div className={ styles.bar }>
                { this.state.mobileOpen && 
                  <div> 
                    { HomePageSections.map( ( section ) =>
                      <div className={ styles.barItem } onClick={ () => this.handleOnClick( section.title ) }><i class={ section.icon } />{ section.title }</div>
                    ) }
                  </div>
                }
              </div>
            </div>
          : <div className={ `${ styles.bar } ${ styles.mobile } noScroll`} id="navDemo">
              <div className={ styles.bar }>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
                <div style={{flex: 1}} />
                <ProjectNav toggleProjectOpen={ () => this.setState({ projectOpen: !this.state.projectOpen })} history={ this.props.history } projectList={ this.state.projectList } i={ this.state.i } first={ first } last={ last } />
                <div style={{flex: 1}} />
                <ThemeToggle theme={ this.props.state.theme } setState={ this.props.setState } isMobile={ true } />
              </div>
              <ProjectOpen projectOpen={ this.state.projectOpen } history={ this.props.history } projectList={ this.state.projectList } />
          </div>
        }
      </div>
    )
  }
}

class ThemeToggle extends Component {
  render(){
    if ( this.props.theme === "default" )
      return( <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" />{ !this.props.isMobile && " DARK" }</div>)
    return( <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" />{ !this.props.isMobile && " DEFAULT" }</div> )
  }
}

class ProjectNav extends Component {
  render(){
    return(
      <div style={{ display: "flex" }}>
        <div onClick={ () => this.props.history.push( this.props.first ? "/" : ("#page" + this.props.projectList[ this.props.i - 1 ].projectName ) ) } style={ this.props.first ? { visibility: "hidden"} : {color: "inherit"}}>
          <div className={ styles.barItem }><i class="fa fa-chevron-left" /></div>
        </div>
        <div className={ styles.barItem } onClick={ () => this.props.toggleProjectOpen() } ><i class="fa fa-bars"/> PROJECT LIST</div>
        <div onClick={ () => this.props.history.push( this.props.last ? "/" : ("#page" + this.props.projectList[ this.props.i + 1 ].projectName ) ) } style={ this.props.last ? { visibility: "hidden"} : {color: "inherit"}}>
          <div className={ styles.barItem }><i class="fa fa-chevron-right" /></div>
        </div>
      </div>
    )
  }
}

class ProjectOpen extends Component {
  render() {
    return(
      <div className={ styles.projectOpen } style={ this.props.projectOpen ? {} : { display: "none"}}>
        { this.props.projectList.map((project, i) => 
          <div onClick={ () => this.props.history.push( "/#page" + project.projectName ) } style={{color: "inherit"}}>
            <div className={ styles.barItem }>
              <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } alt={ project.thumbnail.alt } />
              {project.thumbnail.name}
            </div>
          </div>
        )}
      </div>
    )
  }
}