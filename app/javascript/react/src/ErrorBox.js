import React from 'react'

const ErrorBox = ({ errors }) => {
  let errorElements = errors.map(error => {
    return <li key={error}>{error}</li>
  })
  return (
    <div className='panel alert'>
      <h4>Errors</h4>
      <ul>
        {errorElements}
      </ul>
    </div>
  )
}

export default ErrorBox;
