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

      <div className="review-text">
        <p><b>{props.username}</b></p>
        <p><b>Rating:</b> {props.rating}</p>
        <p><b>Skiing Review:</b> {props.skiingReview}</p>
        <p><b>Food Review:</b> {props.foodReview}</p>
        <p><b>Lodging Review:</b> {props.lodgingReview}</p>
        <p><b>Votes:</b> {props.voteTotal}</p>
      </div>

      <div>
        <button
          className="button"
          type="button"
          name="upvote"
          value="1"
          id={props.id}
          onClick={props.voteHandler}>
          Upvote
        </button>
        <button
          className="button"
          type="button"
          name="downvote"
          value="-1"
          id={props.id}
          onClick={props.voteHandler}>
          Downvote
        </button>
      </div>

      <button className={`${blankOrDelete}`} type="button">Delete</button>
</div>
  )

}

export default ReviewTile;
