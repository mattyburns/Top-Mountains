import React from 'react';

const FormItem = props => {
  return(

<div>
  <label name={props.name}>{props.nameText}</label>
  <input type="text"
    id={props.name}
    value={props.content}
    name={props.name}
    onChange={props.handler} />
</div>

  )

}

export default FormItem;
