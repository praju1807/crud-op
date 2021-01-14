import React from 'react'
import { Component } from "react";


class UserTable extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
    return(
   // console.log(props);
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>age</th>
        <th>address</th>
        <th>location</th>
        <th>gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {this.props.users.length > 0 ? (
        this.props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.address}</td>
            <td>{user.location}</td>
            <td>{user.gender}</td>
            <td>
              <button  onClick={() => {this.props.editRow(user)}} className="button muted-button">Edit</button>
              <button onClick={() => this.props.deleteUser(user.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
    );
 }
}

export default UserTable