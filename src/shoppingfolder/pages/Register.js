import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidation(true);

    if (!name || !email || !password || !mobile) {
      return;
    }

    const userdata = { name, email, password, mobile };

    try {
      await axios.post(
        "http://localhost:8080/api/users/register",
        userdata,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Register successfully! Please login.");
      navigate("/login");

    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Email already exists.");
        navigate("/register");
      } else {
        alert("Something went wrong");
      }
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {validation && !name && <span className="errormsg">Enter name</span>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validation && !email && <span className="errormsg">Enter email</span>}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validation && !password && <span className="errormsg">Enter password</span>}

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {validation && !mobile && <span className="errormsg">Enter mobile</span>}

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
