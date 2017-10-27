import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewIndex from './ReviewIndex'
import HeaderTile from './HeaderTile'


class MountainShowReviewsContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     reviews: [],
     currentUser: [],
     mountain: {name: ""}
   }
   this.addNewReview = this.addNewReview.bind(this)
   this.handleVote = this.handleVote.bind(this)
 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in.json', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
     .then(response => response.json())
     .then(body => {
       this.setState({ currentUser: body.user })
     })
     let id = this.props.params.id
     fetch(`/api/v1/mountains/${id}`)
      .then(response => response.json())
      .then (body => {
       let mountain = body.mountain
       let reviews = mountain.reviews;
       this.setState({reviews: reviews, mountain: mountain})
     })
 }

 handleVote(event) {
   let payLoad = {
     reviewId: event.target.id,
     userId: this.state.currentUser.id,
     vote: event.target.value
   }
   fetch(`/api/v1/upvotes`, {
     method: 'POST',
     body: JSON.stringify(payLoad)
   })
   .then(response => response.json())
   .then(responseData =>{
     this.setState({ reviews: responseData.reviews })
   })
 }

 addNewReview(payLoad) {
  let id = this.props.params.id
  fetch(`/api/v1/mountains/${id}/reviews`, {
    method: 'POST',
    body: JSON.stringify(payLoad)
  })
  .then(response => response.json())
  .then(responseData =>{
    this.setState({ reviews: [responseData.review, ...this.state.reviews] })
  })
 }
  render() {
    let addNewReview = (payLoad) => this.addNewReview(payLoad)
    let handleVote = (event) => this.voteHandler(event)
    return(
      <div>

        <HeaderTile title ={this.state.mountain.name}/>

        <ReviewFormContainer
          addNewReview={this.addNewReview}
          formCurrentUser={this.state.currentUser}
          currentMountain={this.state.mountain}
        />


        <ReviewIndex
          reviews={this.state.reviews}
          currentUser={this.state.currentUser}
          voteHandler={this.handleVote}
        />
      </div>
    )
  }
}
export default MountainShowReviewsContainer
