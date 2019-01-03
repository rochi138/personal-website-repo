import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';

export default class Footer extends Component{
  constructor( props ) {
    super();

    this.handleTop = this.handleTop.bind( this );
  }
  handleTop() {
    document.getElementById('main').scrollIntoView();
  }
  render(){
    return(
    	<footer className={ styles.footer }>
          <div className={ styles.toTop } onClick={ this.handleTop }>
            <i class="fa fa-arrow-up w3-margin-right" />To the top</div>
          <div className={ styles.socialMedia }>
            <a href="https://github.com/rochi138" style={{ color: "white" }}><i class="fa fa-github" />GitHub</a><br />
            <a href="https://www.linkedin.com/in/robyn-ching-18694b148/" style={{ color: "white" }}><i class="fa fa-linkedin" />LinkedIn</a>
          </div>
        </footer>
    	)
	}
}