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
   // I started in your handleMountainSubmitForm function and noticed that current_user
   // existed but was undefined. Tracing backwards, I found that
   // it is this first fetch for the user that isn't working.
   // I would compare code with Matty, since I know it's working for him!
   // Look at the syntax in this fetch, as well as the syntax in your api/v1/user_controller
   // Once you get to a place where the debugger in the render gives you a defined `this.state.currentUser`,
   // you can then move on to throwing some debuggers into your submit and addNewMountain functions
   // to take a look at what values are getting through to each.

   fetch('/api/v1/user/is_signed_in.json', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
     .then(response => response.json())
     .then(body => {
       this.setState({ currentUser: body.user })
     })

   fetch('http://localhost:3000/api/v1/mountains')
    .then(response => response.json())
    .then (body => {
      this.setState({ mountains: body.mountains })
    })
 }

 addNewMountain(payLoad) {
   fetch('/api/v1/mountains', {
     method: 'POST',
     body: JSON.stringify(payLoad)
   })
   .then(response => response.json())
   .then(responseData =>{
     this.setState({ mountains: [...this.state.mountains, responseData.mountain] })
   })
 }


  render() {
    let addNewMountain = (payLoad) => this.addNewMountain(payLoad)
    debugger;

    return(
      <div>

        <HeaderTile title="Top Mountains"/>
        <div className="site-view">
        <div className="site-form-index">
        <h2>Create A Mountain</h2>
        <div className="site-form">
        <MountainFormContainer
          addNewMountain={this.addNewMountain}
          formCurrentUser={this.state.currentUser}
        />
        </div>
        </div>
        <div className="site-index">
        <MountainIndex
          mountains={this.state.mountains}
          currentUser={this.state.currentUser}
        />
      </div>
      </div>
      </div>
    )
  }
}
export default MountainIndexContainer
