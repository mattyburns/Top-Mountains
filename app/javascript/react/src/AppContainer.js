import React from 'react';
import MountainFormContainer from './MountainFormContainer'
import ReviewFormContainer from './ReviewFormContainer'

class AppContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     mountains: [],
     reviews: [],
     currentUser: []
   }
   this.addNewMountain = this.addNewMountain.bind(this)
   this.addNewReview = this.addNewReview.bind(this)

 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in')
     .then(response => response.json())
     .then(body => {
       let user = body.user;
       this.setState({currentUser: user })
     })
 }

 addNewMountain(payLoad) {
   fetch('/api/v1/mountains', {
     method: 'POST',
     body: JSON.stringify(payLoad)
   })
   .then(response => response.json())
   .then(responseData =>{
     this.setState({ mountains: [...this.state.mountains, responseData] })
   })
 }

 addNewReview(payLoad) {
  fetch('/api/v1/reviews', {
    method: 'POST',
    body: JSON.stringify(payLoad)
  })
  .then(response => response.json())
  .then(responseData =>{
    this.setState({ reviews: [...this.state.reviews, responseData] })
  })
 }




  render() {
    let addNewMountain = (payLoad) => this.addNewMountain(payLoad)
    let addNewReview = (payLoad) => this.addNewReview(payLoad)

    return(
      <div>
      <h3>App Container</h3>
        <MountainFormContainer
        addNewMountain={this.addNewMountain}/>

        <ReviewFormContainer
        addNewReview={this.addNewReview} />
      </div>
    )
  }
}
export default AppContainer
