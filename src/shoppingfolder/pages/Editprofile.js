import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Editprofile.css";

export default function Editprofile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("User not found!"));
  }, [id]);

  const updateUser = async () => {
    setValidation(true);

    if (!user.name.trim() || !user.email.trim() || !user.mobile.trim()) {
      return; // stop submit if fields empty
    }

    try {
      const res = await axios.put(
        `http://localhost:8080/api/users/${id}`,
        user
      );

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      if (error.response?.status === 409) {
        alert("Email already exists!");
      } else {
        alert("Update failed! Please try again.");
      }
    }
  };

  return (
    <div className="edit-container">
      <form
        className="edit-box"
        onSubmit={(e) => {
          e.preventDefault();
          updateUser();
        }}
      >
        <h2>Edit Profile</h2>

        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        {validation && !user.name.trim() && (
          <span className="errormsg">Enter name</span>
        )}

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {validation && !user.email.trim() && (
          <span className="errormsg">Enter email</span>
        )}

        <input
          type="text"
          placeholder="Mobile"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        {validation && !user.mobile.trim() && (
          <span className="errormsg">Enter mobile number</span>
        )}

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
