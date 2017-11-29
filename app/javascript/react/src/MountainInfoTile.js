import React from 'react';

const MountainInfoTile = props => {
  return(
    <div>
      <h1>Mountain Details</h1>

      <p>Address: {props.mountain.address}</p>
      <p>{props.mountain.city}, {props.mountain.state}</p>
      <p>Trail count: {props.mountain.trail_count}</p>
      <p>Ticket price: {props.mountain.ticket_price}</p>
      <p>Rental price: {props.mountain.rental_price}</p>

    </div>
  )

}


export default MountainInfoTile;
