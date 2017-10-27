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
   this.handleDeleteMountain = this.handleDeleteMountain.bind(this)
 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in.json', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
     .then(response => response.json())
     .then(body => {
       this.setState({ currentUser: body.user })
     })
   fetch('http://localhost:3000/api/v1/mountains', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
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

 handleDeleteMountain(event) {
   let id = event.target.name
   fetch(`/api/v1/mountains/${id}`, {
     method: 'DELETE',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => {
     if (response.ok) {
       return response
     } else {
       let errorMessage = `${response.status} (${response.statusText})`;
       let error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.json())
   .then(response => {
     this.setState( {mountains: response.mountains} )
   })
 }

  render() {
    let addNewMountain = (payLoad) => this.addNewMountain(payLoad)
    let handleDeleteMountain = (event) => this.handleDeleteMountain(event)

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
              handleDeleteMountain={this.handleDeleteMountain}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default MountainIndexContainer
