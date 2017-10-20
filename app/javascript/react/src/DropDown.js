import React from 'react';

//need to figure out why this is defaulting to Alabama and not setting to state

const DropDown = props => {
  let states = [["AL","Alabama"],
  ["AK","Alaska"],
  ["AZ","Arizona"],
  ["AR","Arkansas"],
  ["CA","California"],
  ["CO","Colorado"],
  ["CT","Connecticut"],
  ["DE","Delaware"],
  ["DC","District Of Columbia"],
  ["FL","Florida"],
  ["GA","Georgia"],
  ["HI","Hawaii"],
  ["ID","Idaho"],
  ["IL","Illinois"],
  ["IN","Indiana"],
  ["IA","Iowa"],
  ["KS","Kansas"],
  ["KY","Kentucky"],
  ["LA","Louisiana"],
  ["ME","Maine"],
  ["MD","Maryland"],
  ["MA","Massachusetts"],
  ["MI","Michigan"],
  ["MN","Minnesota"],
  ["MS","Mississippi"],
  ["MO","Missouri"],
  ["MT","Montana"],
  ["NE","Nebraska"],
  ["NV","Nevada"],
  ["NH","New Hampshire"],
  ["NJ","New Jersey"],
  ["NM","New Mexico"],
  ["NY","New York"],
  ["NC","North Carolina"],
  ["ND","North Dakota"],
  ["OH","Ohio"],
  ["OK","Oklahoma"],
  ["OR","Oregon"],
  ["PA","Pennsylvania"],
  ["RI","Rhode Island"],
  ["SC","South Carolina"],
  ["SD","South Dakota"],
  ["TN","Tennessee"],
  ["TX","Texas"],
  ["UT","Utah"],
  ["VT","Vermont"],
  ["VA","Virginia"],
  ["WA","Washington"],
  ["WV","West Virginia"],
  ["WI","Wisconsin"],
  ["WY","Wyoming"]]

  let stateOptions = states.map(state => {
    return(
      <option key={state[0]} value={state[0]}>{state[1]}</option>
    )
  })
  return(

<div>
  <label name={props.name}>{props.nameText}</label>
  <select onChange={props.handler}>
    {stateOptions}
  </select>
</div>

  )

}

export default DropDown;
