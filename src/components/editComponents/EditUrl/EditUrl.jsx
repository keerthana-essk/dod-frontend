import React, { useState } from 'react';
import './EditUrl.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAccountContext } from '../../../context/AccountContex';

const EditUrl = () => {
  const [password, setPassword] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [reNewUrl, setReNewUrl] = useState('');
  const navigate = useNavigate();
  const { account } = useAccountContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUrl !== reNewUrl) {
      alert('New URL and Re-enter New URL are not the same');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/user/editUrl', {
        userName: account.userName,
        enteredPassword: password,
        newUrl: newUrl,
      });
      if (response.status === 200) {
        alert('URL changed successfully');
        navigate('/');
      }
    } catch (err) {
      console.log('Internal error', err);
    }
  };

  return (
    <div className="edit-url">
      <form onSubmit={handleSubmit} className="edit-url-form">
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            value={password}
            className="form-input"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">New URL</label>
          <input
            value={newUrl}
            className="form-input"
            type="url"
            placeholder="Enter new URL"
            name="newurl"
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Re-enter URL</label>
          <input
            value={reNewUrl}
            className="form-input"
            type="url"
            placeholder="Re-enter URL"
            name="reenter_newurl"
            onChange={(e) => setReNewUrl(e.target.value)}
          />
        </div>
        <input className="form-submit" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditUrl;
