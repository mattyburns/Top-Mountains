import React from 'react';
import ReviewTile from './ReviewTile'

const ReviewIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        currentUser={props.currentUser}
        creatorId={review.user_id}
        rating={review.rating}
        username={review.username}
        skiingReview={review.skiing_review}
        foodReview={review.food_review}
        lodgingReview={review.lodging_review}
        voteTotal={review.vote_total}
        voteHandler={props.voteHandler}
        deleteHandler={props.deleteHandler}
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
