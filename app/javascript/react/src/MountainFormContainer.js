import React, { Component } from 'react'
import FormItem from './FormItem'
import DropDown from './DropDown'
import ErrorBox from './ErrorBox'


class MountainFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      trailCount: '',
      ticketPrice: '',
      rentalPrice: '',
      imageUrl: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMountainSubmitForm = this.handleMountainSubmitForm.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }


  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  handleState(event) {
    this.setState({ state: event.target.value })
    }

  validateContent(selection) {
    let errors = []

    if (this.state.name === ""){
      errors.push("Name field can't be blank. ")
    }

    if (this.state.address === ""){
      errors.push("Address field can't be blank. ")
    }

    if (this.state.city === ""){
      errors.push("City field can't be blank. ")
    }

    if (this.state.state === ""){
      errors.push("A state must be selected. ")
    }

    if (this.state.zip === ""){
      errors.push("Zip code field can't be blank. ")
    }

    if (!/([0-9])\d{4}/.test(this.state.zip)){
      errors.push("Zip code must be 5 digits. ")
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
      name: '',
      address: '',
      city: '',
      state: 'Select a state',
      zip: '',
      trailCount: '',
      ticketPrice: '',
      rentalPrice: '',
      imageUrl: ''
    })
  }

    validateSubmit(event){
      event.preventDefault();
      if(this.validateContent() === false) {
        console.log('bad form');
        return false;
      }

      this.handleMountainSubmitForm(event)
      this.handleClearForm(event)
    }


  handleMountainSubmitForm(event){
    event.preventDefault();
    let mountainPayload = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      trailCount: this.state.trailCount,
      ticketPrice: this.state.ticketPrice,
      rentalPrice: this.state.rentalPrice,
      image_url: this.state.imageUrl,
      creator_id: this.props.formCurrentUser.id
    }
    if (mountainPayload.image_url == "") {
      mountainPayload.image_url = "https://d30y9cdsu7xlg0.cloudfront.net/png/16025-200.png"
    }
    this.props.addNewMountain(mountainPayload);
  }


  render() {
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
     errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="callout" id="site-form">


        <FormItem
          name="name"
          content={this.state.name}
          nameText="Name:"
          handler={this.handleChange}
        />

        <FormItem
          name="address"
          content={this.state.address}
          nameText="Address:"
          handler={this.handleChange}
        />

        <FormItem
          name="city"
          content={this.state.city}
          nameText="City:"
          handler={this.handleChange}
        />

        <DropDown
          name="state"
          content={this.state.state}
          nameText="State:"
          handler={this.handleChange}
        />

        <FormItem
          name="zip"
          content={this.state.zip}
          nameText="Zip Code:"
          handler={this.handleChange}
        />

        <FormItem
          name="trailCount"
          content={this.state.trailCount}
          nameText="Trail Count: (Optional)"
          handler={this.handleChange}
        />

        <FormItem
          name="ticketPrice"
          content={this.state.ticketPrice}
          nameText="Ticekt Price: (Optional)"
          handler={this.handleChange}
        />

        <FormItem
          name="rentalPrice"
          content={this.state.rentalPrice}
          nameText="Rental Price: (Optional)"
          handler={this.handleChange}
        />
        
        <FormItem
          name="imageUrl"
          content={this.state.imageUrl}
          nameText="Image Url: (Optional)"
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

export default MountainFormContainer
