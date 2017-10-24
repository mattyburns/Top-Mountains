import React from 'react';

const ReviewTile = props => {
  let blankOrDelete = ""
  if (props.currentUser.admin === true) {
    blankOrDelete = "delete"
  } else if (props.currentUser.id === props.reviews.user_id) {
    blankOrDelete = "delete"
  } else {
    blankOrDelete = "blank"
  }

  return(
    <div>

      <h3>ReviewTile</h3>
      <h4>props.reviews.rating</h4>
      <p>
        {props.reviews.skiing_review}<br />
        {props.reviews.food_review}<br />
        {props.reviews.lodging_review}<br />
      </p>

      <li>Sample review
        <button className="button" type="button">Upvote</button>
        <button className="button" type="button">Downvote</button>
      </li>
      
      <button className={`${blankOrDelete}`} type="button">Delete</button>
</div>
  )

}

export default ReviewTile;
