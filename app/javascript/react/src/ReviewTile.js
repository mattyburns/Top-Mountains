import React from 'react';

const ReviewTile = props => {
  let blankOrDelete = "blank"
  if (props.currentUser) {
    if (props.currentUser.admin == true || props.creatorId == props.currentUser.id){
      blankOrDelete = "delete"
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

      <button className={`${blankOrDelete}`} id={props.id} type="button" onClick={props.deleteHandler}>Delete</button>
</div>
  )

}

export default ReviewTile;
