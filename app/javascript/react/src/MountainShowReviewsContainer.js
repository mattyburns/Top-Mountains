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
       let reviews = body.reviews;
       let mountain = body.mountain
       this.setState({reviews: reviews, mountain: mountain})
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
    this.setState({ reviews: [...this.state.reviews, responseData] })
  })
 }
  render() {
    let addNewReview = (payLoad) => this.addNewReview(payLoad)

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
        />
      </div>
    )
  }
}
export default MountainShowReviewsContainer
