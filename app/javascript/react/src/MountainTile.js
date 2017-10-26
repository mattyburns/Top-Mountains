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
    <div>
      <div className="mountain-tile">
        <h3 className="mountain-name">{props.mountain.name}</h3>
      </div>
      <div>
        <p className="location">{props.mountain.city}, {props.mountain.state}</p>
      </div>

      <Link to= {`/mountains/${props.mountain.id}`}>
        <img src={`${props.mountain.image_url}`} alt={`Picture of ${props.mountain.name}`}/>
      </Link>

      <button id="button" name={props.mountain.id} className={`${blankOrDelete}`} type="button" onClick={props.handleDeleteMountain}>Delete</button>

        </div>
  )
}

export default MountainTile;
