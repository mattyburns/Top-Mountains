import React from 'react';


const RadioStar = props => {
  return(

<div>
  <label className="rate-area" value={props.content} onChange={props.handler}  >Rating
    <input type="radio" id="5-star" name="rating" value="5"  /><label For="5-star" >5 stars</label>
    <input type="radio" id="4-star" name="rating" value="4"  /><label For="4-star" >4 stars</label>
    <input type="radio" id="3-star" name="rating" value="3"  /><label For="3-star" >3 stars</label>
    <input type="radio" id="2-star" name="rating" value="2"  /><label For="2-star" >2 stars</label>
    <input type="radio" id="1-star" name="rating" value="1"  /><label For="1-star" >1 star</label>
  </label>
</div>


  )

}

export default RadioStar;
