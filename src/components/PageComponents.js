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
				{ source.link && 
					<a href={ source.link }><button className="btn btn-primary">Test out project!</button></a>
				}
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
    this.props.source.slideshow.forEach(function(element) {
      modalStates.push( false );
    });

    this.state={
      source: this.props.source,
      modalStates: modalStates,
      hover: undefined
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
		    <div className={ styles.slideshowComponent }>
          { source.slideshow.map( ( image, i ) =>
            <Col key={ i } onClick={ () => this.toggleModal( i ) } className={ styles.slidePicture } onMouseEnter={ () => this.setState({ hover: i })} onMouseLeave={ () => this.setState({ hover: undefined })} style={ ( this.state.hover !== undefined && i!== this.state.hover ) ? {opacity: 0.6} : {opacity: 1}}>
              <img src={ require('../images/' + image.image.src + '.jpg')} style={{ width: "100%", maxWidth: "300px", minWidth: "100px"}} alt={ image.image.alt }/>
              <Modal isOpen={ this.state.modalStates[ i ] } toggle={ () => this.toggleModal( i ) } size="lg">
                <ModalHeader toggle={ () => this.toggleModal( i ) }>{ image.title }</ModalHeader>
                <ModalBody>
                  <img src={ require('../images/' + image.image.src + '.jpg')} style={{ width: "100%" }} alt={ image.image.alt }/>
                  <div dangerouslySetInnerHTML={ { __html: image.description } } />
                </ModalBody>
                { source.slideshow.length !== 1 && 
	                <ModalFooter>
	                	{ i !== 0 && 
	                		<Button onClick={ () => { this.toggleModal( i ); this.toggleModal( i - 1) }}>Previous</Button>
	                	}
	                	{ i !== source.slideshow.length - 1 && 
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

export class TableComponent extends Component {
  render(){
  	const source = this.props.source;
    return(
    <div style={{ marginTop: "3em", display: "block", overflow: "auto" }}>
	    <div className={ styles.tableComponent }>
	      <div className={ styles.main }>
	        <h2><div className={ styles.title }>
	          { source.title }
	        </div></h2>
	        { source.link &&
	          <div className={ styles.link }>
	            <a href={ source.link } target='_blank' rel='noopener noreferrer' >GitHub Repository</a>
	          </div>
	        }
		      <h4><Row classname={ styles.header }>
	          <Col md={ 2 }>{ source.leftTitle }</Col>
				  	<Col md={ 10 } className={ styles.rightTitle }>{ source.rightTitle }</Col>
				  </Row></h4>
				  { source.list.map( ( item, i ) =>
	          <Row key={ i } className={ styles.listItem }>
		        	<Col md={ 2 } className={ styles.left } dangerouslySetInnerHTML={ { __html: item.left } } />
		        	<Col md={ 10 } className={ styles.right }>
		        		{ item.right.map( ( point, j ) =>
				          <div dangerouslySetInnerHTML={ { __html: point } } key={ j }/>
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

export class ListComponent extends Component {
  render(){
  	const source = this.props.source;
    return(
    <div style={{ marginTop: "3em", display: "block", overflow: "auto", overflowWrap: "break-word" }}>
	    <div className={ styles.listComponent }>
		    <div className={ styles.main }>
	        <h2><div className={ styles.title }>
	          { source.title }
	        </div></h2>
	        <ul>
				    { source.list.map( ( point, i ) =>
			        <li key={ i } dangerouslySetInnerHTML={ { __html: point } } />
			     	) }
		     	</ul>
		    </div>
	    </div>
    </div>
    )
  }
}