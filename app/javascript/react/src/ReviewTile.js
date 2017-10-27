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

      <p>{props.username}</p>
      <p>Rating: {props.rating}</p>
      <p>Skiing Review: {props.skiingReview}</p>
      <p>Food Review: {props.foodReview}</p>
      <p>Lodging Review: {props.lodgingReview}</p>
      <p>Votes: {props.voteTotal}</p>


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
