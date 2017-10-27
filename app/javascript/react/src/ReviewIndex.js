import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        rating={review.rating}
        username={review.username}
        skiingReview={review.skiing_review}
        foodReview={review.food_review}
        lodgingReview={review.lodging_review}
        voteTotal={review.vote_total}
        voteHandler={props.voteHandler}
      />
    )
  })
  return(
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews}
      </ul>
    </div>
  );
}

export default ReviewIndex;
