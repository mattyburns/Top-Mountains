import React, { Component } from 'react'
import FormItem from './FormItem'


class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      skiingReview: '',
      foodReview: '',
      lodgingReview: ''
    }
    this.handleRating = this.handleRating.bind(this);
    this.handleSkiingReview = this.handleSkiingReview.bind(this);
    this.handleFoodReview = this.handleFoodReview.bind(this);
    this.handleLodgingReview = this.handleLodgingReview.bind(this);
    this.handleReviewSubmitForm = this.handleReviewSubmitForm.bind(this);
  }

  handleRating(event) {
    this.setState({ rating: event.target.value })
    }

  handleSkiingReview(event) {
    this.setState({ skiingReview: event.target.value })
    }

  handleFoodReview(event) {
    this.setState({ foodReview: event.target.value })
    }

  handleLodgingReview(event) {
    this.setState({ lodgingReview: event.target.value })
    }

  handleReviewSubmitForm(event){
    console.log(this.state)
    event.preventDefault();
    let reviewPayload = {
      rating: this.state.rating,
      skiingReview: this.state.skiingReview,
      foodReview: this.state.foodReview,
      lodgingReview: this.state.lodgingReview,
    }
    this.props.addNewReview(reviewPayload);
  }


  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h4>Review Form</h4>

        <FormItem
          name="rating"
          content={this.state.rating}
          nameText="Rating:"
          handler={this.handleRating}
        />

        <FormItem
          name="skiingReview"
          content={this.state.skiingReview}
          nameText="Skiing Review:"
          handler={this.handleSkiingReview
          }
        />

        <FormItem
          name="foodReview"
          content={this.state.foodReview}
          nameText="Food Review:"
          handler={this.handleFoodReview}
        />

        <FormItem
          name="lodgingReview"
          content={this.state.lodgingReview}
          nameText="Lodging Review:"
          handler={this.handleLodgingReview}
        />

        <input type="submit" className="button" value="Submit " onClick={this.handleReviewSubmitForm} />
      </form>
    )
  }
}

export default ReviewFormContainer
