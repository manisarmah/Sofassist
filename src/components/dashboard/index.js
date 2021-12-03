import React from "react";
import "./styles.css";
import IconSide from "../otherIcon";
import Profile from "./Rectangle 17.svg";
import { useState } from "react";
import {
  PersonAdd,
  FolderOpen,
  Message,
  PeopleAltOutlined,
  GroupAdd,
  Timer,
  Brightness6Sharp,
  Settings,
} from "@mui/icons-material";

const CustomColor = { color: "rgba(155, 81, 224, 1)" };
const icons = [
  { element: <PersonAdd style={CustomColor} />, isClicked: false, index: 0 },
  { element: <FolderOpen style={CustomColor} />, isClicked: false, index: 1 },
  { element: <Message style={CustomColor} />, isClicked: true, index: 2 },
  {
    element: <PeopleAltOutlined style={CustomColor} />,
    isClicked: false,
    index: 3,
  },
  { element: <GroupAdd style={CustomColor} />, isClicked: false, index: 4 },
  { element: <Timer style={CustomColor} />, isClicked: false, index: 5 },
  {
    element: <Brightness6Sharp style={CustomColor} />,
    isClicked: false,
    index: 6,
  },
  { element: <Settings style={CustomColor} />, isClicked: false, index: 7 },
];

const Dashboard = () => {
  const [Icons, setIcons] = useState(icons);
  const handleClick = (idx) => {
    icons[2].isClicked = false;
    setIcons(
      icons.map((icon) =>
        icon.index == idx ? { ...icon, isClicked: true } : icon
      )
    );
  };
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
            {Icons.map((icon, i) => {
              return (
                <IconSide
                  Icon={icon.element}
                  iterator={i}
                  handleClick={handleClick}
                  index={icon.index}
                  isClicked={icon.isClicked}
                />
              );
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
