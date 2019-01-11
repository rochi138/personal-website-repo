import React, { Component } from 'react';
import styles from '../SCSS/Main.module.scss';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from'reactstrap';

export class ProjectSummary extends Component {
	render() {
		const source = this.props.source;
		return (
			<div className={ styles.projectSummary }>
				<img src={ require('../images/' + source.image.src + '.jpg' ) } class="w3-round w3-image" alt={ source.image.alt } style={{objectFit: "contain", maxWidth: "400px", maxHeight: "500px" }} width="80%" height="80%" />
				<h1>{ source.projectName }</h1>
				<h3>{ source.tagline }</h3>
				<h4>{ source.type }</h4>
				<div className={ styles.summary } dangerouslySetInnerHTML={ { __html: source.summary } } />
			</div>
		)
	}
}

export class AwardsComponent extends Component {
	render() {
		const source = this.props.source;
		return (
			<div className={ styles.awardsComponent }>
				<img src={ require('../images/' + source.image.src + '.jpg' ) } class="w3-round w3-image" alt={ source.image.alt } style={{objectFit: "contain", width:"15em", height:"15em" }} />
				<h4>{ source.header }</h4>
				{ source.caption && 
					<div style={{ textAlign: "center" }} dangerouslySetInnerHTML={ { __html: source.caption } } />
				}
			</div>
		)
	}
}

export class SlideshowComponent extends Component {
	constructor(props) {
    super(props);

    var modalStates = [];
    this.props.source.forEach(function(element) {
      modalStates.push( false );
    });

    this.state={
      source: this.props.source,
      modalStates: modalStates
    }
  }

  toggleModal( key ) {
    var modalStates = this.state.modalStates;
    modalStates[ key ] = !this.state.modalStates[ key ];
    this.setState({
      modalStates: modalStates
    });
  }

  render(){
  	const source = this.props.source;
    return(
	    <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
		    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          { source.map( ( image, i ) =>
            <Col key={ i } onClick={ () => this.toggleModal( i ) } style={{ textAlign: "center" }}>
              <img src={ require('../images/' + image.image.src + '.jpg')} style={{ width: "100%", maxWidth: "300px", minWidth: "100px"}} alt={ image.image.alt }/>
              <Modal isOpen={ this.state.modalStates[ i ] } toggle={ () => this.toggleModal( i ) } size="lg">
                <ModalHeader toggle={ () => this.toggleModal( i ) }>{ image.title }</ModalHeader>
                <ModalBody>
                  <img src={ require('../images/' + image.image.src + '.jpg')} style={{ width: "100%" }} alt={ image.image.alt }/>
                  <div dangerouslySetInnerHTML={ { __html: image.description } } />
                </ModalBody>
                { source.length !== 1 && 
	                <ModalFooter>
	                	{ i !== 0 && 
	                		<Button onClick={ () => { this.toggleModal( i ); this.toggleModal( i - 1) }}>Previous</Button>
	                	}
	                	{ i !== source.length - 1 && 
	                		<Button onClick={ () => { this.toggleModal( i ); this.toggleModal( i + 1) }}>Next</Button>
	                	}
	                </ModalFooter>
	              }
              </Modal>
            </Col>
          ) }
        </div>
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
				      	<Col md={ 2 } className={ styles.title }>{ update.date }</Col>
		        		<Col md={ 10 } className={ styles.description }>
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
		        	<Col md={ 2 } className={ styles.name } dangerouslySetInnerHTML={ { __html: member.name } } />
		        	<Col md={ 10 } className={ styles.description }>
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
			        <li key={ i } dangerouslySetInnerHTML={ { __html: takeaway } } />
			     	) }
		     	</ul>
		    </div>
	    </div>
    </div>
    )
  }
}
