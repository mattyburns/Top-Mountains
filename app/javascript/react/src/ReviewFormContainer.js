import React, { Component } from 'react'
import FormItem from './FormItem'
import ErrorBox from './ErrorBox'
import RadioStars from './radiostars'
import TextAreaFormItem from './TextAreaFormItem'


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
    this.handleChange = this.handleChange.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }



  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
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

    this.handleReviewSubmitForm(event)
    this.handleClearForm(event)
  }

  handleReviewSubmitForm(event){
    let reviewPayload = {
      rating: this.state.rating,
      skiing_review: this.state.skiingReview,
      food_review: this.state.foodReview,
      lodging_review: this.state.lodgingReview,
      user_id: this.props.formCurrentUser.id,
      mountain_id: this.props.currentMountain.id
    }
    this.props.addNewReview(reviewPayload);
  }


  render() {
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
    errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="callout" id="review-form">


        <RadioStars
          name="rating"
          handler={this.handleChange}
          content={this.state.rating}
        />
        <br/>
        <br/>

        <TextAreaFormItem
          name="skiingReview"
          content={this.state.skiingReview}
          nameText="Skiing Review"
          handler={this.handleChange}
        />

        <TextAreaFormItem
          name="foodReview"
          content={this.state.foodReview}
          nameText="Food Review"
          handler={this.handleChange}
        />

        <TextAreaFormItem
          name="lodgingReview"
          content={this.state.lodgingReview}
          nameText="Lodging Review"
          handler={this.handleChange}
        />
        <div>
          {errors}
        </div>
        <input type="submit" className="button" value="Submit " onClick={handleSubmit} />
      </form>
    )
  }
}

export default ReviewFormContainer
