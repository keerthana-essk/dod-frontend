import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useAccountContext } from "../../../context/AccountContex";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAccount } = useAccountContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        userName: userName,
        password: password,
      });

      if (response.status === 200) {
        setAccount(response.data.data);
        alert("Login success!!");
        navigate('/');
      } else {
        alert("Incorrect credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form-group">
          <label className="login-form-label">Username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your username"
            className="login-form-input"
          />
        </div>
        <div className="login-form-group">
          <label className="login-form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="login-form-input"
          />
        </div>
        <input className="login-form-submit" type="submit" value="Login" />
      </form>
      <button onClick={props.onFormSwitch} className="login-form-switch">
        Don't have an account? Create here
      </button>
    </div>
  );
};

export default Login;
