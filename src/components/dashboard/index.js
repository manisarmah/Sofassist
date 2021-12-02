import React from "react";
import "./styles.css";
const Dashboard = () => {
  return (
    <div>
      <div className="Dashboard">
        <div className="sideNav"></div>
        <div className="rightContainer">
          <div className="topNav"></div>
          <div className="bottomContainer">
            <div className="bottomLeftContainer">
              <div className="topBar"></div>
              <div className="bottomArea"></div>
            </div>
            <div className="bottomRightContainer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
