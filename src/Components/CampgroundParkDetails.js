import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import ReviewContainer from "../Containers/ReviewContainer"

class CampgroundParkDetails extends Component {

  render() {
  	console.log("CgroundParkDetails props are", this.props)


    return (

      <div className="box">
      <Card.Header className= "card">

      <p> {this.props.selectedCampground.name} </p>
      <img className= "park-img" alt="" src={this.props.selectedPark.photos[0].url1} />

     <p> {this.props.selectedCampground.description} </p>
     <p> {this.props.selectedCampground.directions_overview} </p>
     <p> showers available: {this.props.selectedCampground.showers.toString()} </p>
     <p> good cellphone reception: {this.props.selectedCampground.cell_phone_reception.toString()} </p>

    <ReviewContainer />

     </Card.Header >
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  selectedPark: state.selectedPark,
  selectedCampground: state.selectedCampground
})

export default connect(mapStateToProps)(CampgroundParkDetails);
