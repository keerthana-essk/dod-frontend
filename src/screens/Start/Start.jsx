import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Login from "../../components/startComponents/Login/Login";
import Signup from "../../components/startComponents/Signup/Signup";
import "./Start.css";
import { useLocation } from "react-router-dom";

const Start = () => {
  const location = useLocation();
  const [isUser, setIsUser] = useState("yes");

  useEffect(() => {
    if (location.state?.authType) {
      setIsUser(location.state.authType === "signup" ? "no" : "yes");
    }
  }, [location.state]);

  const toggle = (decision) => {
    setIsUser(decision);
  };

  return (
    <div className="start">
      <Header />
      <div className="auth-container">
        {isUser === "yes" ? (
          <Login onFormSwitch={() => toggle("no")} />
        ) : (
          <Signup onFormSwitch={() => toggle("yes")} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Start;
