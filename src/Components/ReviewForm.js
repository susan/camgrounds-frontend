import React, { Component } from 'react';
import { connect } from "react-redux"
import { createReview } from "../redux/campgroundThunks.js"

class ReviewForm extends Component {

 state = {
 	  user_id: 1,
 	  campground_id: "1",
    rating: "",
    content: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    const review= this.state
    this.props.createReview(review)
  }



  render() {

    return (
    	<React.Fragment>
    	{console.log("reviewform props are", this.props)}

    	<p> {this.props.selectedCampground.name}</p>
    	<br></br>
    	<form className="reviewform" onSubmit={this.handleSubmit} >
      <p> Select Rating: </p>

      <select  name="rating" onChange={this.handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>


      <textarea rows="12" cols="80"
            name="content"
            placeholder="Add your review here"
            onChange={this.handleChange}

          />

       <button type="submit" className= "btn">
       Add Review</button>

      </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
      selectedCampground: state.selectedCampground
    }

  }

  const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
  })


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
