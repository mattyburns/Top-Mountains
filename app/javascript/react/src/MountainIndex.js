import React from 'react';
import MountainTile from './MountainTile'

const MountainIndex = props => {
  let mountains = props.mountains.map(mountain => {
    return(
        <MountainTile
          key={mountain.id}
          mountain={mountain}
          currentUser={props.currentUser}
          handleDeleteMountain={props.handleDeleteMountain}
        />
    )
  })
  return(
    <div>
      <h2>Top Rated Mountains</h2>
      <ul>
        {mountains}
      </ul>
    </div>
  );
}

export default MountainIndex;
