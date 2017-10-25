import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        rating={review.rating}
        skiingReview={review.skiing_review}
        foodReview={review.food_review}
        lodgingReview={review.lodging_review}
        voteHandler={props.voteHandler}
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
