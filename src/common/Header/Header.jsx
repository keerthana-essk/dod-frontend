import React from "react";
import "./Header.css";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1
        className="title"
        onClick={() => {
          navigate("/");
        }}
      >
        DOMAIN-IN-DOMAIN
      </h1>
      <CiHome
        className="home-icon"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default Header;
