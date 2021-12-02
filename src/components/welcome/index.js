import React from "react";
import { FaInfoCircle, FaArrowLeft } from "react-icons/fa";
import NewuserJoin from "../NewUserLogin/index";
import CreateAccount from "../createAccount/index";
import Login from "../login/index";
import ImageUpload from "../Imageupload/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "../createAccount";
import "./styles.css";
const Welcome = () => {
  function getContent(step) {
    switch (step) {
      case 0:
        return <NewuserJoin />;

      case 1:
        return <ImageUpload />;
      case 2:
        return <Login />;
      case 3:
        return <CreateAccount />;
      default:
        return "unknown step";
    }
  }
  return (
    <div>
      <div class="full-height">
        <div className="leftContainer">
          <div className="leftContainerItems">
            <span className="logo">
              <img src="/img/logo.png" alt="logo" width="40px" />
            </span>
            <span className="appName">Sofassist</span>
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightContainerItems">
            <div className="navigation">
              <div className="backButton">
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "#212121" }}
                >
                  <FaArrowLeft />
                </a>
              </div>
              <div className="infoButton">
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "#212121" }}
                >
                  <FaInfoCircle />
                </a>
              </div>
            </div>
            <br />
            <br />
            <div>{getContent(2)}</div>
          </div>
          <br />

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
