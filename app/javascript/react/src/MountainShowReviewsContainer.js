import React from 'react';
import ReviewFormContainer from './ReviewFormContainer';
import ReviewIndex from './ReviewIndex';
import HeaderTile from './HeaderTile';
import MountainInfoTile from './MountainInfoTile';
import Access from './Access';

class MountainShowReviewsContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     reviews: [],
     currentUser: [],
     mountain: ''
   }
   this.addNewReview = this.addNewReview.bind(this)
   this.handleVote = this.handleVote.bind(this)
   this.handleDeleteReview = this.handleDeleteReview.bind(this)
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

 handleDeleteReview(event) {
   let id = event.target.id
   fetch(`/api/v1/reviews/${id}`, {
     method: 'DELETE',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => {
     if (response.ok) {
       return response
     } else {
       let errorMessage = `${response.status} (${response.statusText})`;
       let error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.json())
   .then(response => {
     this.setState( {reviews: response.reviews} )
   })

 }
  render() {
    let addNewReview = (payLoad) => this.addNewReview(payLoad)
    let handleVote = (event) => this.voteHandler(event)
    let handleDelete = (event) => this.handleDeleteReview(event)
    if (this.state.currentUser) {
    return(
      <div>
        <HeaderTile title ={this.state.mountain.name}/>

        <div>
          <MountainInfoTile
            mountain={this.state.mountain}
          />
        </div>
        <div className="site-view">
          <div className="site-form-index">
            <h2>Write A Review</h2>
            <div className="site-form">
              <ReviewFormContainer
                addNewReview={this.addNewReview}
                formCurrentUser={this.state.currentUser}
                currentMountain={this.state.mountain}
              />
            </div>
          </div>
          <div className="site-index">

            <ReviewIndex
              reviews={this.state.reviews}
              currentUser={this.state.currentUser}
              voteHandler={this.handleVote}
              deleteHandler={handleDelete}
            />
          </div>
        </div>
      </div>
    )} else {
    return(
      <div>
        <HeaderTile title ={this.state.mountain.name}/>
        <div className="site-view">
          <div className="site-form-index">
            <h2>Write A Review</h2>
            <div className="site-form">
              <Access
              />
            </div>
          </div>
          <div className="site-index">

            <ReviewIndex
              reviews={this.state.reviews}
              currentUser={this.state.currentUser}
              voteHandler={this.handleVote}
              deleteHandler={handleDelete}
            />
          </div>
        </div>
      </div>
    )}
  }
}
export default MountainShowReviewsContainer
