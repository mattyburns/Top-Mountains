import React from 'react';

const TextAreaFormItem = props => {
  return(

<div>
  <label name={props.name}>{props.nameText}</label><br></br>
  <textarea
    rows="4"
    id={props.name}
    value={props.content}
    name={props.name}
    onChange={props.handler} />
</div>

  )

}

export default TextAreaFormItem;
