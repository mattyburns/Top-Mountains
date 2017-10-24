import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        review={review}
      />
    )
  })
  return(
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
  );
}

export default ReviewIndex;
