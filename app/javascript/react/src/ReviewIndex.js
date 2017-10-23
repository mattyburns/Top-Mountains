import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  // let reviews = props.reviews.map(review => {
  //   return(
  //     <ReviewTile
  //       // key = {review}
  //       // review = {review}
  //     />
  //   )
  // })
  return(
    <div>

      <h1>Review Index</h1>
      <ReviewTile/>

    </div>
  );
}

export default ReviewIndex;
