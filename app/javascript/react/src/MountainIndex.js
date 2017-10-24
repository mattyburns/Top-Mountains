import React from 'react';
import MountainTile from './MountainTile'

const MountainIndex = props => {
  let mountains = props.mountains.map(mountain => {
    return(
        <MountainTile
          key={mountain.id}
          mountain={mountain}
        />
    )
  })
  return(
    <div>
      <h1>Mountain Index</h1>
      <ul>
        {mountains}
      </ul>
    </div>
  );
}

export default MountainIndex;
