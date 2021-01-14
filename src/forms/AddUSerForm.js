import React from 'react'
import { Component } from "react";

class AddUserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            initialFormState :{ id: null, name: '',age:'',adress:'',location:'',gender:'Male' }
        }
    }
     handleInputChange = (event) => {
        const { name, value } = event.target
    this.setState({
        initialFormState:{ ...this.state.initialFormState, [name]: value }
    })
      }
    
render(){
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!this.state.initialFormState.name ||  !this.state.initialFormState.age || !this.state.initialFormState.address || !this.state.initialFormState.location ) return

        this.props.addUser(this.state.initialFormState)
        // this.setState({
        //     initialFormState:{ id: null, name: event.target.name, username: event.target.username }
        // })
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={this.state.initialFormState.name}
        onChange={this.handleInputChange}
      />
      
      <label>age</label>
      <input
        type="number"
        name="age"
        value={this.state.initialFormState.age}
        onChange={this.handleInputChange}
      />
      <label>address</label>
      <input
        type="text"
        name="address"
        value={this.state.initialFormState.address}
        onChange={this.handleInputChange}
      />
      <label>location</label>
       <input
        type="text"
        name="location"
        value={this.state.initialFormState.location}
        onChange={this.handleInputChange}
      />
      <label>Gender</label>
      <div>
                 <select name = "gender" value={this.state.initialFormState.gender} onChange={this.handleInputChange}>
                  <option value = "Male">Male</option>;
                  <option value = "Female">Female</option>;
              
              </select>
      </div>
      <button>Add new user</button>
    </form>
  )
}
}
export default AddUserForm