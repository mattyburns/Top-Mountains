import React from 'react';
import { Link } from 'react-router';

const MountainTile = props => {
  let blankOrDelete = ""
  if (props.currentUser === undefined) {
    blankOrDelete = "blank"
  } else if (props.currentUser.admin === true) {
    blankOrDelete = "delete"
  } else if (props.currentUser.admin != true && props.currentUser.id != null) {
    if (props.mountain.creator_id === props.currentUser.id) {
      blankOrDelete = "delete"
    }
    else {
      blankOrDelete = "blank"
    }
  }

  return(
    <div className="site-tile">
      <div>
        <Link to= {`/mountains/${props.mountain.id}`}>
        <h2 className="mountain-name">{props.mountain.name}</h2>
        </Link>
      </div>
      <div>
        <p className="location">{props.mountain.city}, {props.mountain.state}</p>
      </div>
        <img src={`${props.mountain.image_url}`} alt={`Picture of ${props.mountain.name}`}/>
      <button id="button" className={`${blankOrDelete}`} type="button">Delete</button>

    </div>
  )
}

export default MountainTile;
