import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';

export default class Header extends Component{
  constructor( props ) {
    super();
    this.state={
      open: false,
    }
    
    this.handleOnClick = this.handleOnClick.bind( this );
    this.mobileToggle = this.mobileToggle.bind( this );

  }

  handleOnClick( isMobile, id ) {
    if ( isMobile ) this.mobileToggle();
    if ( id === 'home' ) this.props.history.push('/');
    if ( !document.getElementById( id ) ) return null;
    document.getElementById( id ).scrollIntoView();
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
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navBar.className = `${ styles.bar } ${ styles.desktop } ${ styles.scroll }`;
          navDemo.className = `${ styles.bar } ${ styles.mobile } ${ styles.scroll }`;
      } else {
          navBar.className = `${ styles.bar } ${ styles.desktop }`;
          navDemo.className = `${ styles.bar } ${ styles.mobile }`;
      }
  }

  mobileToggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render(){
    return(
      <div className={ styles.header }>
        <div className={ `${ styles.bar } ${ styles.desktop }` } id="myNavbar">
          <div className={ styles.barItem } onClick={ () => this.handleOnClick( false, 'home' ) }>HOME</div>
          { this.props.isHome &&
            <div> 
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( false, 'about' ) }><i class="fa fa-user" /> ABOUT</div>
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( false, 'projects' ) }><i class="fa fa-th" /> PROJECTS</div>
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( false, 'contact' ) }><i class="fa fa-envelope" /> CONTACT</div>
              <div className={ styles.barItem } onClick={ () => this.handleOnClick( false, 'interests' ) }><i class="fa fa-heart" /> INTERESTS</div>
            </div>
          }
        </div>
        <div className={ `${ styles.bar } ${ styles.mobile }` } id="navDemo">
          <div className={ styles.barItem } onClick={ () => this.mobileToggle() }>
            <i class="fa fa-bars"/>ROBYN CHING
          </div>
          { ( this.state.open ) &&
            <div>
              { ( this.props.isHome ) ?
                <div>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( true, 'about' ) }>ABOUT</div>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( true, 'projects' ) }>PROJECTS</div>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( true, 'contact' ) }>CONTACT</div>
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( true, 'contact' ) }>INTERESTS</div>
                </div> :
                <div> 
                  <div className={ styles.barItem } onClick={ () => this.handleOnClick( true, 'home' ) }>HOME</div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    )
  }
}
