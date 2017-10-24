import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewIndex from './ReviewIndex'
import HeaderTile from './HeaderTile'


class MountainShowReviewsContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     reviews: [],
     currentUser: []
   }
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


 // componentDidMount() {
 //   fetch('/api/v1/mountains/:id')
 //    .then(response => response.json())
 //    .then (body => {
 //      let reviews = body.reviews;
 //      this.setState({reviews: reviews})
 //    })
 //
 // }

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
    let addNewReview = (payLoad) => this.addNewReview(payLoad)

    return(
      <div>

        <HeaderTile title ="Reviews"/>

        <ReviewFormContainer
          addNewReview={this.addNewReview} />

        <ReviewIndex
          reviews={this.state.reviews}
          currentUser={this.state.currentUser}
        />
      </div>
    )
  }
}
export default MountainShowReviewsContainer
