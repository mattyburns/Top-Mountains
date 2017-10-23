import React from 'react';
import MountianTile from './MountianTile'

const MountainIndex = props => {
  let mountains = props.mountains.map(mountain => {
    return(
      <MountianTile
        key = {mountain}
        mountain = {mountain}
      />
    )
  })
  return(
    <ul>
      {mountains}
    </ul>
  );
}

export default MountainIndex;
