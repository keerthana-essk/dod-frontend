import React, { useState } from "react";
import "./EditDomain.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../../context/AccountContex";

const EditDomain = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [reDomain, setReDomain] = useState("");
  const navigate = useNavigate();
  const { account } = useAccountContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (domain !== reDomain) {
      alert("Domain and Re-Enter Domain are not the same");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/user/editDomain", {
        userName: account.userName,
        enteredPassword: oldPassword,
        newDomainName: domain,
      });
      if (response.status === 200) {
        alert("Domain changed successfully");
        navigate('/');
      }
    } catch (err) {
      console.log("Internal error", err);
    }
  };

  return (
    <div className="edit-domain">
      <form onSubmit={handleSubmit} className="edit-domain-form">
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            value={oldPassword}
            className="form-input"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">New Domain</label>
          <input
            value={domain}
            className="form-input"
            type="text"
            placeholder="Enter new domain"
            name="newDomain"
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Re-enter Domain</label>
          <input
            value={reDomain}
            className="form-input"
            type="text"
            placeholder="Re-enter domain"
            name="reenter_newDomain"
            onChange={(e) => setReDomain(e.target.value)}
          />
        </div>
        <input className="form-submit" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditDomain;
