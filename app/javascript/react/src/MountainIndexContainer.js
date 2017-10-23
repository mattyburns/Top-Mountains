import React from 'react';
import MountainFormContainer from './MountainFormContainer'

class MountainIndexContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     mountains: [],
     currentUser: []
   }
   this.addNewMountain = this.addNewMountain.bind(this)
 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in')
     .then(response => response.json())
     .then(body => {
       let user = body.user;
       this.setState({currentUser: user })
     })
 }

 addNewMountain(payLoad) {
   fetch('/api/v1/mountains', {
     method: 'POST',
     body: JSON.stringify(payLoad)
   })
   .then(response => response.json())
   .then(responseData =>{
     this.setState({ mountains: [...this.state.mountains, responseData] })
   })
 }

 }
  render() {
    let addNewMountain = (payLoad) => this.addNewMountain(payLoad)

    return(
      <div>
        <h3>Index Container</h3>
        <MountainFormContainer
          addNewMountain={this.addNewMountain}/>

        <MountianIndex />
      </div>
    )
  }
}
export default MountainIndexContainer
