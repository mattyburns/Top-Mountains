import React from 'react';

const MountainTile = props => {
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
      <div>
        <h3>{props.mountain.name}</h3>
      </div>
      <div>
        <p>{props.mountain.city}, {props.mountain.state}</p>
      </div>

      <a href={`/mountains/${props.mountain.id}`}>
        <img src={`${props.mountain.image_url}`} alt={`Picture of ${props.mountain.name}`}/>
      </a>

      <button className={`${blankOrDelete}`} type="button">Delete</button>
      
    </div>
  )
}

      export default MountainTile;
