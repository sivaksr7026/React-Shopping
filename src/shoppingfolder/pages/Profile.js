import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <h2>No user logged in</h2>;

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <table border="1" width="60%">
        <tbody>

          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Action</th>

          </tr>

          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td> <Link to={`/editprofile/${user.id}`}>
             <button className="editbutton" >Edit</button>
             </Link></td>
          </tr>
        </tbody>
      </table>

      <br />

     
   
    </div>
  );
}
