import React, { Component } from 'react'
import FormItem from './FormItem'


class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      skiingReview: '',
      foodReview: '',
      lodgingReview: '',


    }
    this.handleRating = this.handleRating.bind(this);
    this.handleSkiingReview = this.handleSkiingReview.bind(this);
    this.handleFoodReview = this.handleFoodReview.bind(this);
    this.handleLodgingReview = this.handleLodgingReview.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
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

  handleSubmitForm(event){
    console.log(this.state)
    event.preventDefault();
    let mountainPayload = {
      rating: this.state.rating,
      skiingReview: this.state.skiingReview,
      foodReview: this.state.foodReview,
      lodgingReview: this.state.lodgingReview,
    }
    console.log(mountainPayload)
  }


  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Review Form</h1>

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

        <input type="submit" className="button" value="Submit " onClick={this.handleSubmitForm} />
      </form>
    )
  }
}

export default ReviewFormContainer
