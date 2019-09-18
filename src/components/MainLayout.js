import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../SCSS/Main.module.scss';

export class MainLayout extends Component{
  constructor( props ) {
    super();

    this.handleTop = this.handleTop.bind( this );
  }
  handleTop() {
    document.getElementById('main').scrollIntoView({ behavior: "smooth" });
  }
  render(){
    var index = window.location.href.indexOf("#page");
    if ( index !== -1 )
      this.props.history.push( '/' + window.location.href.slice( index + 5 ) )
    return(
      <div className='main' id='main'>
        <Header {...this.props} />
        { React.Children.map( this.props.children, child =>
            React.cloneElement( child ),
          )
        }
        <div className={ styles.toTop } onClick={ () => this.handleTop() }>
          <i class="fas fa-angle-double-up" />
        </div>
        <Footer {...this.props} />
      </div>
      );
  }
}
