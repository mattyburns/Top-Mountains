import React from 'react';
import AppContainer from './AppContainer'

class App extends React.Component{
 constructor(props) {
   super(props);
 }
  render() {

    return(
      <div>
      <h1>App</h1>
        <AppContainer />
      </div>
    )
  }
}
export default App
