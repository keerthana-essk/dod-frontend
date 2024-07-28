import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = (props) => {
  const [userName, setUserName] = useState("");
  const [domainName, setDomainName] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        userName: userName,
        password: password,
        domainName: domainName,
        url: url,
      });
      console.log(response.data);
      alert("Signup success!!");
      props.onFormSwitch();
    } catch (error) {
      console.error("Error:", error);
      alert("Internal error during Signup!!");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-form-group">
          <label className="signup-form-label">Username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your username"
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">Domain Name</label>
          <input
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            type="text"
            placeholder="Your domain name"
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">URL</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            placeholder="Your URL (https://your/link)"
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">Re-enter Password</label>
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            type="password"
            placeholder="Re-enter Password"
            className="signup-form-input"
          />
        </div>
        <input className="signup-form-submit" type="submit" value="Signup" />
      </form>
      <button onClick={props.onFormSwitch} className="signup-form-switch">
        Already have an account? Log in here
      </button>
    </div>
  );
};

export default Signup;
