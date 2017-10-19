import React from 'react';
import MountainFormContainer from './MountainFormContainer'

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
      </div>
    )
  }
}
export default App
