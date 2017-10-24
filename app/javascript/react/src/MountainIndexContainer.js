import React from 'react';
import MountainFormContainer from './MountainFormContainer'
import MountainIndex from './MountainIndex'
import HeaderTile from './HeaderTile'

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

 // componentDidMount() {
 //   fetch('/api/v1/mountains')
 //    .then(response => response.json())
 //    .then (body => {
 //      let mountains = body.mountains;
 //      this.setState({mountains: mountains})
 //    })
 //
 // }


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


  render() {
    let addNewMountain = (payLoad) => this.addNewMountain(payLoad)

    return(
      <div>

        <HeaderTile title="Top Mountains"/>

        <MountainFormContainer
          addNewMountain={this.addNewMountain}/>

        <MountainIndex
          mountains={this.state.mountains}
          currentUser={this.state.currentUser}
        />
      </div>
    )
  }
}
export default MountainIndexContainer
