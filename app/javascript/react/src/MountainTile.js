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
      <img className="mountainimage" src={`${props.mountain.image_url}`} alt={`Picture of ${props.mountain.name}`}/>
      <div className="mountain-tile-name">
        <Link to= {`/mountains/${props.mountain.id}`}>
        <h3 className="mountain-name"><strong>{props.mountain.name}:</strong> {props.mountain.city}, {props.mountain.state}</h3>
        </Link>
      </div>
      <button id="button" name={props.mountain.id} className={`${blankOrDelete}`} type="button" onClick={props.handleDeleteMountain}>Delete</button>
        </div>
  )
}

export default MountainTile;
