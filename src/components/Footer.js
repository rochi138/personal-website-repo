import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';

export default class Footer extends Component{
  render(){
    return(
    	<footer className={ styles.footer }>
        Robyn Ching
        <div style={{ display: "flex" }}>
          <a href="https://github.com/rochi138"><i class="fab fa-github" /></a><br />
          <a href="https://www.linkedin.com/in/robyn-c-18694b148/"><i class="fab fa-linkedin" /></a>
        </div>
      </footer>
    	)
	}
}