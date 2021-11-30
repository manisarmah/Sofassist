import React from "react";
import { FaInfoCircle, FaArrowLeft } from "react-icons/fa";
import "./styles.css";
import Login from "../login";
<<<<<<< HEAD
import NewuserJoin from "../NewUserLogin/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

=======
import Signup from "../createAccount";
>>>>>>> 7b414dbcd2cea1e98acfafbe665478a7a8acfd46
const Welcome = () => {
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
              <div>
              <NewuserJoin/>
              </div>
            </div>
<<<<<<< HEAD
=======
            <br />

            <div></div>
>>>>>>> 7b414dbcd2cea1e98acfafbe665478a7a8acfd46
          </div>
        </div>
      </div>
  );
};

export default Welcome;
