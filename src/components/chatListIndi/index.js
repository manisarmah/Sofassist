import React from "react";
import ChatListProfile from "../chatListProfile";
import ChatListStatus from "../chatListStatus";
import ChatListText from "../chatListText";
import "./style.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";


const ChatListInd = ({ src, name, msg }) => {
  return (
    <div className="wrap_chatList">
      <div className="outer_div_chatList">
        <div className="chatList_icon">
          <ChatListProfile src={src} />
        </div>
        <div className="chatList_data">
          <div className="chatList_data_text">
            <ChatListText name={name} msg={msg} />
          </div>
          <div className="chatList_status">
            <ChatListStatus />
          </div>
        </div>
      </div>
      <div className="icon_wrapper">
        <div className="icons">
          <VolumeOffOutlinedIcon style={{ fontSize: "0.9rem" }} />
          <TimerOutlinedIcon style={{ fontSize: "0.9rem" }} />
        </div>
      </div>
    </div>
  );
};

export default ChatListInd;
