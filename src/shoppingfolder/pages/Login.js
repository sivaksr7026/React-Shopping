import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setValidation(true);

    if (!email || !password) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        { email, password }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Login successful!");
      navigate("/profile");
      
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

       
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validation && !email && (
          <span className="errormsg">Please enter email</span>
        )}

       
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validation && !password && (
          <span className="errormsg">Please enter password</span>
        )}

        <button type="submit">Login</button>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
