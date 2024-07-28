import React, { useState } from 'react';
import './EditPassword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAccountContext } from '../../../context/AccountContex';

const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
  const navigate = useNavigate();
  const { account } = useAccountContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== reNewPassword) {
      alert('New Password and Re-enter New Password are not the same');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/user/editPass', {
        userName: account.userName,
        enteredPassword: oldPassword,
        newPassword: newPassword,
      });
      if (response.status === 200) {
        alert('Password changed successfully');
        navigate('/');
      }
    } catch (err) {
      console.log('Internal error', err);
    }
  };

  return (
    <div className="edit-password">
      <form onSubmit={handleSubmit} className="edit-password-form">
        <div className="form-group">
          <label className="form-label">Old Password</label>
          <input
            value={oldPassword}
            className="form-input"
            type="password"
            placeholder="Enter old Password"
            name="oldpassword"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">New Password</label>
          <input
            value={newPassword}
            className="form-input"
            type="password"
            placeholder="Enter new Password"
            name="newpassword"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Re-enter Password</label>
          <input
            value={reNewPassword}
            className="form-input"
            type="password"
            placeholder="Re-enter Password"
            name="reenter_newpassword"
            onChange={(e) => setReNewPassword(e.target.value)}
          />
        </div>
        <input className="form-submit" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditPassword;
