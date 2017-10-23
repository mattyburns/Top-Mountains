import React from 'react';
import MountainTile from './MountainTile'

const MountainIndex = props => {
  let mountains = props.mountains.map(mountain => {
    return(
      <div>
      <h1>Mountain Index</h1>
      <MountianTile
        key = {mountain}
        mountain = {mountain}
      />
      </div>
    )
  })
  return(
    <ul>
      {mountains}
    </ul>
  );
}

export default MountainIndex;
