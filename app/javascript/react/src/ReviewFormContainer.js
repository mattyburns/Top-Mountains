import React, { Component } from 'react'
import FormItem from './FormItem'
import TextAreaFormItem from './TextAreaFormItem'
import ErrorBox from './ErrorBox'
import RadioStar from './RadioStars'

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
    this.handleChangeStars = this.handleChangeStars.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }



  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  handleChangeStars(event){
    let field = event.target.name
    let Value = event.target.value
    let newValue = Number(Value)
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
      skiingReview: this.state.skiingReview,
      foodReview: this.state.foodReview,
      lodgingReview: this.state.lodgingReview,
      userId: this.props.formCurrentUser.id,
      mountainId: this.props.currentMountain.id
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
        <h2>Write A Review</h2>

        <RadioStar
          name="rating"
          handler={this.handleChangeStars}
          content={this.state.rating}
        />
        <FormItem
          name="rating"
          content={this.state.rating}
          nameText="Rating"
          handler={this.handleChange}
        />

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
