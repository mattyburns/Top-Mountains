import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key = {review}
        review = {review}
      />
    )
  })
  return(
    <ul>
      {reviews}
    </ul>
  );
}

export default ReviewIndex;
