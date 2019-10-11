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
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> DARK</div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> DEFAULT</div>
                }
              </div>
            </div>
          : <div className={ `${ styles.bar } ${ styles.desktop } scroll` } id="myNavbar">
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
                <div style={{flex: 1}} />
                <div onClick={ () => this.props.history.push( first ? "/" : ("#page" + this.state.projectList[ this.state.i - 1 ].projectName ) ) } style={ first ? { visibility: "hidden"} : {color: "inherit"}}>
                  <div className={ styles.barItem }><i class="fa fa-chevron-left" /></div>
                </div>
                <div className={ styles.barItem } onClick={ () => this.setState(prevState => ({projectOpen: !prevState.projectOpen }))}><i class="fa fa-bars"/> PROJECT LIST</div>
                <div onClick={ () => this.props.history.push( last ? "/" : ("#page" + this.state.projectList[ this.state.i + 1 ].projectName ) ) } style={ last ? { visibility: "hidden"} : {color: "inherit"}}>
                  <div className={ styles.barItem }><i class="fa fa-chevron-right" /></div>
                </div>
                <div style={{flex: 1}} />
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> DARK</div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> DEFAULT</div>
                }
              </div>
              { this.state.projectOpen && 
                <div style={{display: "flex", flexDirection: "row"}}>
                  { this.state.projectList.map((project, i) => 
                    <div onClick={ () => this.props.history.push( "/#page" + project.projectName ) } style={{color: "inherit"}}>
                      <div className={ styles.barItem }>
                        <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } alt={ project.thumbnail.alt } />
                        {project.thumbnail.name}
                      </div>
                    </div>
                  )}
                </div>
              }
            </div>
        }
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.mobile } noScroll`} id="navDemo">
              <div className={ styles.bar }>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
                <div className={ styles.barItem } style={{flex: 1}} onClick={ () => this.setState(prevState => ({mobileOpen: !prevState.mobileOpen })) }><i class={ this.state.open ? "fa fa-chevron-up" : "fa fa-chevron-down" }/></div>
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> </div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> </div>
                }
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
                <div onClick={ () => this.props.history.push( first ? "/" : ("#page" + this.state.projectList[ this.state.i - 1 ].projectName ) ) } style={ first ? { visibility: "hidden"} : {color: "inherit"}}>
                  <div className={ styles.barItem }><i class="fa fa-chevron-left" /></div>
                </div>
                <div className={ styles.barItem } onClick={ () => this.setState(prevState => ({projectOpen: !prevState.projectOpen }))}><i class="fa fa-bars"/> PROJECT LIST</div>
                <div onClick={ () => this.props.history.push( last ? "/" : ("#page" + this.state.projectList[ this.state.i + 1 ].projectName ) ) } style={ last ? { visibility: "hidden"} : {color: "inherit"}}>
                  <div className={ styles.barItem }><i class="fa fa-chevron-right" /></div>
                </div>
                <div style={{flex: 1}} />
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> </div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> </div>
                }
              </div>
              { this.state.projectOpen && 
                <div className={ styles.bar }> 
                  { this.state.projectList.map((project, i) => 
                    <div onClick={ () => this.props.history.push( "/#page" + project.projectName ) } style={{color: "inherit"}}>
                      <div className={ styles.barItem }>
                        <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } alt={ project.thumbnail.alt } />
                        {project.thumbnail.name}
                      </div>
                    </div>
                  )}
                </div>
              }
          </div>
        }
      </div>
    )
  }
}
