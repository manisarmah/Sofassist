import React from "react";
import "./styles.css";
import IconSide from "../otherIcon";
import Profile from './Rectangle 17.svg'
// import icons from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {PersonAdd, FolderOpen, Message, PeopleAltOutlined, GroupAdd, Timer, Brightness6Sharp, Settings} from "@mui/icons-material";
const CustomColor = { color: "rgba(155, 81, 224, 1)" };
const icons = [<PersonAdd style={CustomColor} />,<FolderOpen style={CustomColor} />,<Message style={CustomColor} />,<PeopleAltOutlined style={CustomColor} />,<GroupAdd style={CustomColor} />,<Timer style={CustomColor} />,<Brightness6Sharp style={CustomColor} />,<Settings style={CustomColor} />];

const Dashboard = () => {
  return (
    <div>
      <div className="Dashboard">
        <div className="sideNav">
          <div className="profile_pic">
            <div className="inner_box">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="other_icons">
            {/* <FontAwesomeIcon icon="camera"/> */}
            {/* <FontAwesomeIcon icon="fas fa-stroopwafel" style={{color:"black"}}/> */}
            {icons.map((icon) => {
              return <IconSide Icon={icon} />;
            })}
          </div>
        </div>
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
