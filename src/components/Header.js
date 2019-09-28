import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';

export default class Header extends Component{
  constructor( props ) {
    super();
    this.state={
      open: false,
    }
    
    this.handleOnClick = this.handleOnClick.bind( this );

  }

  handleOnClick( id ) {
    this.setState({open: false });
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

  render(){
    return(
      <div className={ styles.header }>
        { this.props.isHome
          ? <div className={ `${ styles.bar } ${ styles.desktop }` + " scroll" } id="myNavbar">
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
          : <div className={ `${ styles.bar } ${ styles.desktop }` + " scroll" } id="myNavbar">
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /> HOME</div>
              <div style={{flex: 1}} />
              <div className={ styles.barItem }><i class="fa fa-bars"/> PROJECT LIST</div>
              <div style={{flex: 1}} />
              { this.props.state.theme === "default"
                ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> DARK MODE</div>
                : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> DEFAULT</div>
              }
            </div>
        }
        <div className={ `${ styles.bar } ${ styles.mobile }` + " noScroll"} id="navDemo">
          { this.props.isHome
            ? <div>
                <div className={ styles.bar }>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
                  <div className={ styles.barItem } style={{flex: 1}} onClick={ () => this.setState(prevState => ({open: !prevState.open })) }><i class={ this.state.open ? "fa fa-chevron-up" : "fa fa-chevron-down" }/></div>
                  { this.props.state.theme === "default"
                    ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> </div>
                    : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> </div>
                  }
                </div>
                <div className={ styles.bar }>
                  { this.state.open && 
                    <div> 
                      <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'about' ) }><i class="fa fa-user" /> ABOUT</div>
                      <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'projects' ) }><i class="fa fa-th" /> PROJECTS</div>
                      <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'contact' ) }><i class="fa fa-envelope" /> CONTACT</div>
                      <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'interests' ) }><i class="fa fa-heart" /> INTERESTS</div>
                    </div>
                  }
                </div>
              </div>
            : <div className={ styles.bar }>
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( 'home' ) }><i class="fa fa-home" /></div>
              <div style={{flex: 1}} />
              <div className={ styles.barItem }><i class="fa fa-bars"/> PROJECT LIST</div>
              <div style={{flex: 1}} />
              { this.props.state.theme === "default"
                ? <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "dark" })}><i class="fa fa-moon" /> </div>
                : <div className={ styles.barItem } onClick={ () => this.props.setState({ theme: "default" })}><i class="fa fa-sun" /> </div>
              }
          </div>
          }
        </div>
      </div>
    )
  }
}
