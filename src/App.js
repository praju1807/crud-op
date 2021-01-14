import './App.css';
import React, { Component } from "react";
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUSerForm.js'
import EditUserForm from './forms/EditUserForm'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       usersData : [
        { id: 1, name: 'Tania',age:45,address:'back street',location:'us',gender:'Female' },
        { id: 2, name: 'Craig',age:45,address:'back street',location:'us',gender:'Male' },
        { id: 3, name: 'Ben', age:45,address:'back street',location:'us',gender:'Female' },
      ],
      editing:false,
      currentUser:{ id: null, name: '',age:'',address:'',location:'',gender:'' }
    }
    
    }
     addUser = (user) => {
      user.id = this.state.usersData.length + 1;
     this.setState({
      usersData:[...this.state.usersData, user]
     });
      //setUsers([...users, user])
    }
    deleteUser = (id) => {
      this.setState({
        usersData:this.state.usersData.filter((user) => user.id !== id)
       });
    }
    
    editRow = (user) => {
      this.setState({
        editing:true,
       currentUser:{ id: user.id, name: user.name,age:user.age,address:user.address,location:user.location,gender:user.gender }
       });
     
    }
    updateUser = (id, updatedUser) => {
      this.setState({
        editing:false,
        usersData:this.state.usersData.map((user) => (user.id === id ? updatedUser : user))
       });
    
      //setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }
    editFalse =()=>{
      this.setState({
        editing:false,
       });
    }
  
   
  

  render(){
    console.log(this.state);
  return (
    <div className="container">
      <h3>User Registration </h3>
      <div className="flex-row">
      <div className="flex-large">
  {this.state.editing ? (
    <div>
      <h4>Edit user</h4>
      <EditUserForm
        setEditing={this.editFalse}
        currentUser={this.state.currentUser}
        updateUser={this.updateUser}
      />
    </div>
  ) : (
    <div>
      <h4>Add user</h4>
      <AddUserForm addUser={this.addUser} />
    </div>
  )}
</div>
        
        
      </div>
      <div className="flex-row">
      <div className="flex-large">
          <h4>View users</h4>
          <UserTable users={this.state.usersData} editRow={this.editRow} deleteUser={this.deleteUser}/>
        </div>
      </div>
      
    </div>
  );
}
}
export default App;
