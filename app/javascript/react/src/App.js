import React from 'react';
import MountainFormContainer from './MountainFormContainer'
import ReviewFormContainer from './ReviewFormContainer'

class App extends React.Component{
 constructor(props) {
   super(props);
   this.state ={

   }
 }
  render() {


    return(
      <div>
      <h1>Hello World</h1>
        <MountainFormContainer />
        <ReviewFormContainer />
      </div>
    )
  }
}
export default App
