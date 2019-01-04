import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';
import { Row, Col } from 'reactstrap';

export class ProjectSummary extends Component {
	render() {
		const source = this.props.source;
		return (
			<div className={ styles.projectSummary }>
				<img src={ require('../images/' + source.image.src + '.jpg' ) } class="w3-round w3-image" alt={ source.image.alt } style={{objectFit: "contain" }} width="400" height="500" />
				<h1>{ source.projectName }</h1>
				<h3>{ source.tagline }</h3>
				<h4>{ source.type }</h4>
				<div className={ styles.summary } dangerouslySetInnerHTML={ { __html: source.summary } } />
			</div>
		)
	}
}

export class ProgressComponent extends Component {
  render(){
  	const source = this.props.source;
    return(
    <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
	    <div className={ styles.progressComponent }>
	      <div className={ styles.main }>
	        <h2><div className={ styles.title }>
	          Progress
	        </div></h2>
	        { source.link &&
	          <div className={ styles.link }>
	            <a href={ source.link } target='_blank' rel='noopener noreferrer' >GitHub Repository</a>
	          </div>
	        }
		      <h4><Row classname={ styles.header }>
	          <Col md={ 2 }>Date</Col>
			  		<Col md={ 10 }>Update Description</Col>
			 		</Row></h4>
					{ source.updateList.map( ( update, i ) =>
				      <Row key={ i } className={ styles.listItem }>
				      	<Col md={ 2 }>{ update.date }</Col>
				      	<Col md={ 10 }>
		        		{ update.text.map( ( aspect, j ) =>
				          <div dangerouslySetInnerHTML={ { __html: aspect } } key={ j }/>
						    ) }
			    		</Col>
				    	</Row>
				  ) }
	      </div>
	    </div>
    </div>
    )
  }
}

export class MeetTheTeamComponent extends Component {
  render(){
  	const source = this.props.source;
  	console.log(source.memberList[ 0 ].text);
    return(
    <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
	    <div className={ styles.meetTheTeamComponent }>
	      <div className={ styles.main }>
	        <h2><div className={ styles.title }>
	          Meet the Team!
	        </div></h2>
		      <h4><Row classname={ styles.header }>
	          <Col md={ 2 }>Name</Col>
				  	<Col md={ 10 }>Contribution</Col>
				  </Row></h4>
				  { source.memberList.map( ( member, i ) =>
	          <Row key={ i } className={ styles.listItem }>
		        	<Col md={ 2 } dangerouslySetInnerHTML={ { __html: member.name } } />
		        	<Col md={ 10 }>
		        		{ member.text.map( ( contribution, j ) =>
				          <div dangerouslySetInnerHTML={ { __html: contribution } } key={ j }/>
						    ) }
			    		</Col>
	        	</Row>
			    ) }
	      </div>
	    </div>
    </div>
    )
  }
}

export class KeyTakeawaysComponent extends Component {
  render(){
  	const source = this.props.source;
    return(
    <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
	    <div className={ styles.keyTakeawaysComponent }>
		    <div className={ styles.main }>
		        <h2><div className={ styles.title }>
		            Key Takeaways
		        </div></h2>
		        <ul>
				    { source.takeawayList.map( ( takeaway, i ) =>
			        <li dangerouslySetInnerHTML={ { __html: takeaway } } />
			     	) }
		     	</ul>
		    </div>
	    </div>
    </div>
    )
  }
}