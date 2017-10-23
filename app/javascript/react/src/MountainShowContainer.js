// import React from 'react'
// import ReviewFormContainer from './ReviewFormContainer'
//
//
// class MountainShowContainer extends React.Component{
//  constructor(props) {
//    super(props);
//    this.state = {
//      reviews: [],
//      currentUser: []
//    }
//    this.addNewReview = this.addNewReview.bind(this)
//  }
//
//  componentDidMount() {
//    fetch('/api/v1/user/is_signed_in')
//      .then(response => response.json())
//      .then(body => {
//        let user = body.user;
//        this.setState({currentUser: user })
//      })
//  }
//
//  addNewReview(payLoad) {
//   fetch('/api/v1/reviews', {
//     method: 'POST',
//     body: JSON.stringify(payLoad)
//   })
//   .then(response => response.json())
//   .then(responseData =>{
//     this.setState({ reviews: [...this.state.reviews, responseData] })
//   })
//  }
//   render() {
//     let addNewReview = (payLoad) => this.addNewReview(payLoad)
//
//     return(
//       <div>
//         <h3>Show Container</h3>
//         <ReviewFormContainer
//           addNewReview={this.addNewReview} />
//
//         <ReviewTile />
//       </div>
//     )
//   }
// }
// export default MountainShowContainer
