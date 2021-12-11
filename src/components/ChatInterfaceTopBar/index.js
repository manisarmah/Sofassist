import React from "react";
import chatdetails from "../ChatListDetails/chatListdetails";
import "./style.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PositionedPopper from "../popper";

const ChatInterfaceTopBar = () => {
  return (
    <div className="top_chat_interface_wrapper">
      <div className="chat_topbar_profile">
      <div className="arrow">
          <ArrowBackIosIcon style={{color:"rgba(155, 81, 224, 1)"}}/>
      </div>
        <div className="profile_details">
          <div className="chat_interface_dp">
            <img src={chatdetails[0].image} alt="" />
          </div>
          <h3>{chatdetails[0].name}</h3>
        </div>
        <div className="online_status">
            <div className="circle"></div>
        </div>
      </div>
      <div className="chat_topbar_hamburger">
          {/* <MenuIcon style={{fontSize:"2.2rem", color:"rgba(155, 81, 224, 1)", }}/> */}
          <PositionedPopper/>
      </div>
    </div>
  );
};

export default ChatInterfaceTopBar;
