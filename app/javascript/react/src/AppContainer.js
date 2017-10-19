import React from 'react';
import MountainFormContainer from './MountainFormContainer'
import ReviewFormContainer from './ReviewFormContainer'

class AppContainer extends React.Component{
 constructor(props) {
   super(props);
   }

  render() {

    return(
      <div>
      <h3>App Container</h3>
        <MountainFormContainer />
        <ReviewFormContainer />
      </div>
    )
  }
}
export default AppContainer
