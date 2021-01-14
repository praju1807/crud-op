import React, { Component } from "react";


class EditUserForm extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            user:this.props.currentUser
        }
    }
    
 // const [user, setUser] = useState(props.currentUser)
 componentWillReceiveProps(props)
 {
   this.setState({
    user:props.currentUser
  });
  
 }
 
   handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
        user:{ ...this.state.user, [name]: value }
    })
  }
render(){
  
  console.log(this.state);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        this.props.updateUser(this.state.user.id, this.state.user)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={this.state.user.name}
        onChange={this.handleInputChange}
      />
     
      <label>age</label>
       <input
        type="number"
        name="age"
        value={this.state.user.age}
        onChange={this.handleInputChange}
      />
      <label>address</label>
      <input
        type="text"
        name="address"
        value={this.state.user.address}
        onChange={this.handleInputChange}
      />
      <label>location</label>
      <input
        type="text"
        name="location"
        value={this.state.user.location}
        onChange={this.handleInputChange}
      />
      <label>Gender</label>
      <div>
                 <select name = "gender" value={this.state.user.gender} onChange={this.handleInputChange}>
                  <option value = "Male">Male</option>;
                  <option value = "Female">Female</option>;
              
              </select>
      </div>
      <button>Update user</button>
      <button
        onClick={this.props.editFalse}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}
}

export default EditUserForm