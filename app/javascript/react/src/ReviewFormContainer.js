import React, { Component } from 'react'
import FormItem from './FormItem'
import ErrorBox from './ErrorBox'


class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      skiingReview: '',
      foodReview: '',
      lodgingReview: '',
      errors: []
    }
    this.handleRating = this.handleRating.bind(this);
    this.handleSkiingReview = this.handleSkiingReview.bind(this);
    this.handleFoodReview = this.handleFoodReview.bind(this);
    this.handleLodgingReview = this.handleLodgingReview.bind(this);
    this.handleReviewSubmitForm = this.handleReviewSubmitForm.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
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




  validateContent(selection) {
    let errors = []

    if (this.state.rating < 1 || this.state.rating > 5){
      errors.push("Rating must be between 1 and 5. ")
    }

    this.setState({errors: errors})

    if (errors.length){
      return false;
    } else {
      return true;
    }
  }

  handleClearForm(event) {
  event.preventDefault();
  this.setState({
    rating: '',
    skiingReview: '',
    foodReview: '',
    lodgingReview: ''
  })
}

  validateSubmit(event){
    event.preventDefault();
    if(this.validateContent() === false) {
      console.log('bad form');
      return false;
    }

    this.handleReviewSubmitForm()
    this.handleClearForm(event)
  }

  handleReviewSubmitForm(event){
    console.log(this.state)
    let reviewPayload = {
      rating: this.state.rating,
      skiingReview: this.state.skiingReview,
      foodReview: this.state.foodReview,
      lodgingReview: this.state.lodgingReview,
    }
    this.props.addNewReview(reviewPayload);
  }


  render() {
    let validateSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
    errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="callout" id="review-form">
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
        <div>
          {errors}
        </div>
        <input type="submit" className="button" value="Submit " onClick={this.validateSubmit} />
      </form>
    )
  }
}

export default ReviewFormContainer
