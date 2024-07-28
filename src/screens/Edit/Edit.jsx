import React, { useState } from "react";
import "./Edit.css";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import EditDomain from "../../components/editComponents/EditDomain/EditDomain";
import EditPassword from "../../components/editComponents/EditPassword/EditPassword";
import EditUrl from "../../components/editComponents/EditUrl/EditUrl";
import { useAccountContext } from "../../context/AccountContex";

const Edit = () => {
  const [selectedOption, setSelectedOption] = useState("password");
  const { account } = useAccountContext();
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="edit">
      {account !== null ? (
        <>
          <Header />
          <div className="edit-section">
            <button
              onClick={() => handleButtonClick("password")}
              className="edit-button"
            >
              Edit Password
            </button>
            <button
              onClick={() => handleButtonClick("domain")}
              className="edit-button"
            >
              Edit Domain
            </button>
            <button
              onClick={() => handleButtonClick("url")}
              className="edit-button"
            >
              Edit URL
            </button>
          </div>
          {selectedOption === "password" && <EditPassword />}
          {selectedOption === "domain" && <EditDomain />}
          {selectedOption === "url" && <EditUrl />}
          <Footer />
        </>
      ) : (
        <>please login before accessing this</>
      )}
    </div>
  );
};

export default Edit;
