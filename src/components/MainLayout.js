import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export class MainLayout extends Component{
  render(){
    return(
      <div className='main' id='main'>
        <Header {...this.props} />
        { React.Children.map( this.props.children, child =>
            React.cloneElement( child ),
          )
        }
        <Footer {...this.props} />
      </div>
      );
  }
}
