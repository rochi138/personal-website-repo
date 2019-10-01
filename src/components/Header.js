import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          navBar.className = `${ styles.bar } ${ styles.desktop }` + " scroll";
          navDemo.className = `${ styles.bar } ${ styles.mobile }` + " scroll";
      } else {
          navBar.className = `${ styles.bar } ${ styles.desktop }` + " noScroll";
          navDemo.className = `${ styles.bar } ${ styles.mobile }` + " noScroll";
      }
  }

  componentDidUpdate( prevProps ){
    if ( !prevProps.state.projectList.length ) 
      this.setState({projectList: this.props.state.projectList})
    if ( prevProps.i != this.props.i )
      this.setState({i: this.props.i})
  }

  render(){
    const first = !this.state.projectList[0] ? false : !this.state.i;
    const last = !this.state.projectList[0] ? false : this.state.i === this.state.projectList.length -1;
    return(
      //plz for the love of god resrtucture this
      <div className={ styles.header }>
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.desktop }` + " scroll" } id="myNavbar">
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'about' ) }><i class="fa fa-user" /> ABOUT</div>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'projects' ) }><i class="fa fa-th" /> PROJECTS</div>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'contact' ) }><i class="fa fa-envelope" /> CONTACT</div>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'interests' ) }><i class="fa fa-heart" /> INTERESTS</div>
                <div style={{flex: 1}} />
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> DARK MODE</div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> DEFAULT</div>
                }
              </div>
            </div>
          : <div className={ `${ styles.bar } ${ styles.desktop }` + " scroll" } id="myNavbar">
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
                <div style={{flex: 1}} />
                { !first && 
                  <a href={"https://rochi138.github.io/personal-website-repo#page" + this.state.projectList[ this.state.i - 1 ].projectName } style={{color: "inherit"}}>
                    <div className={ styles.barItem }><i class="fa fa-chevron-left" /></div>
                  </a>
                }
                <div className={ styles.barItem } onClick={ () => this.setState(prevState => ({projectOpen: !prevState.projectOpen }))}><i class="fa fa-bars"/> PROJECT LIST</div>
                { !last && 
                  <a href={"https://rochi138.github.io/personal-website-repo#page" + this.state.projectList[ this.state.i + 1 ].projectName } style={{color: "inherit"}}>
                    <div className={ styles.barItem }><i class="fa fa-chevron-right" /></div>
                  </a>
                }
                <div style={{flex: 1}} />
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> DARK MODE</div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> DEFAULT</div>
                }
              </div>
              { this.state.projectOpen && 
                <div style={{display: "flex", flexDirection: "row"}}>
                  { this.state.projectList.map((project, i) => 
                    <a href={"https://rochi138.github.io/personal-website-repo#page" + project.projectName } target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>
                      <div className={ styles.barItem }>
                        <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } alt={ project.thumbnail.alt } />
                        {project.thumbnail.name}
                      </div>
                    </a>
                  )}
                </div>
              }
            </div>
        }
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.mobile }` + " noScroll"} id="navDemo">
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
                    <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'about' ) }><i class="fa fa-user" /> ABOUT</div>
                    <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'projects' ) }><i class="fa fa-th" /> PROJECTS</div>
                    <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'contact' ) }><i class="fa fa-envelope" /> CONTACT</div>
                    <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'interests' ) }><i class="fa fa-heart" /> INTERESTS</div>
                  </div>
                }
              </div>
            </div>
          : <div className={ `${ styles.bar } ${ styles.mobile }` + " noScroll"} id="navDemo">
              <div className={ styles.bar }>
                <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
                <div style={{flex: 1}} />
                { !first && 
                  <a href={"https://rochi138.github.io/personal-website-repo#page" + this.state.projectList[ this.state.i - 1 ].projectName } style={{color: "inherit"}}>
                    <div className={ styles.barItem }><i class="fa fa-chevron-left" /></div>
                  </a>
                }
                <div className={ styles.barItem } onClick={ () => this.setState(prevState => ({projectOpen: !prevState.projectOpen }))}><i class="fa fa-bars"/> PROJECT LIST</div>
                { !last && 
                  <a href={"https://rochi138.github.io/personal-website-repo#page" + this.state.projectList[ this.state.i + 1 ].projectName } style={{color: "inherit"}}>
                    <div className={ styles.barItem }><i class="fa fa-chevron-right" /></div>
                  </a>
                }
                <div style={{flex: 1}} />
                { this.props.state.theme === "default"
                  ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> </div>
                  : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> </div>
                }
              </div>
              { this.state.projectOpen && 
                <div className={ styles.bar }> 
                  { this.state.projectList.map((project, i) => 
                    <a href={"https://rochi138.github.io/personal-website-repo#page" + project.projectName } target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>
                      <div className={ styles.barItem }>
                        <img src={ require('../images/' + project.thumbnail.image + '.jpg' ) } alt={ project.thumbnail.alt } />
                        {project.thumbnail.name}
                      </div>
                    </a>
                  )}
                </div>
              }
          </div>
        }
      </div>
    )
  }
}
