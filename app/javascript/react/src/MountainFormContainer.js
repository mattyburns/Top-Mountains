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
      imageUrl: '',
      errors: []
    }
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleImageUrl = this.handleImageUrl.bind(this);
    this.handleMountainSubmitForm = this.handleMountainSubmitForm.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value })
    }

  handleAddress(event) {
    this.setState({ address: event.target.value })
    }

  handleCity(event) {
    this.setState({ city: event.target.value })
    }

  handleState(event) {
    this.setState({ state: event.target.value })
    }

  handleZip(event) {
    this.setState({ zip: event.target.value })
    }

  handleImageUrl(event) {
    this.setState({ imageUrl: event.target.value })
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
      state: '',
      zip: '',
      imageUrl: ''
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


  handleMountainSubmitForm(event){
    console.log(this.state)
    event.preventDefault();
    let mountainPayload = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      imageUrl: this.state.imageUrl
    }
    this.props.addNewMountain(mountainPayload);
  }


  render() {
    let validateSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
     errors = <ErrorBox errors={this.state.errors} />
   }

    return (
      <form className="callout" id="mountain-form">
        <h4>Mountain Form</h4>

        <FormItem
          name="name"
          content={this.state.name}
          nameText="Name:"
          handler={this.handleName}
        />

        <FormItem
          name="address"
          content={this.state.address}
          nameText="Address:"
          handler={this.handleAddress}
        />

        <FormItem
          name="city"
          content={this.state.city}
          nameText="City:"
          handler={this.handleCity}
        />

        <DropDown
          name="state"
          content={this.state.state}
          nameText="State:"
          handler={this.handleState}
        />

        <FormItem
          name="zip"
          content={this.state.zip}
          nameText="Zip Code:"
          handler={this.handleZip}
        />

        <FormItem
          name="imageUrl"
          content={this.state.imageUrl}
          nameText="Image Url:"
          handler={this.handleImageUrl}
        />


        <div>
          {errors}
        </div>


        <input type="submit" className="button" value="Submit " onClick={this.validateSubmit} />
      </form>
    )
  }
}

export default MountainFormContainer
