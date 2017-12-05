import React from 'react';

const MountainInfoTile = props => {
  return(
    <div>
      <p><b>Address:</b> {props.mountain.address}</p>
      <p>{props.mountain.city}, {props.mountain.state}</p>
      <p><b>Trail count:</b> {props.mountain.trail_count}</p>
      <p><b>Ticket price:</b> {props.mountain.ticket_price}</p>
      <p><b>Rental price:</b> {props.mountain.rental_price}</p>
    </div>
  )

}


export default MountainInfoTile;
