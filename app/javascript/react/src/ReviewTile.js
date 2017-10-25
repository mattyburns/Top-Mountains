import React from 'react';

const ReviewTile = props => {
  let blankOrDelete = ""
  if (props.currentUser === undefined) {
    blankOrDelete = "blank"
  } else if (props.currentUser.admin === true) {
    blankOrDelete = "delete"
  } else if (props.currentUser.admin != true && props.currentUser.id != null) {
    if (props.review.user_id === props.currentUser.id) {
      blankOrDelete = "delete"
    }
    else {
      blankOrDelete = "blank"
    }
  }

  return(
    <div className="site-tile">

      <p>Rating: {props.rating}</p>
      <p>Skiing Review: {props.skiingReview}</p>
      <p>Food Review: {props.foodReview}</p>
      <p>Lodging Review: {props.lodgingReview}</p>


      <li>
        <button className="button" type="button">Upvote</button>
        <button className="button" type="button">Downvote</button>
      </li>

      <button className={`${blankOrDelete}`} type="button">Delete</button>
</div>
  )

}

export default ReviewTile;
