import React from "react";
import ChatListProfile from "../chatListProfile";
import ChatListStatus from "../chatListStatus";
import ChatListText from "../chatListText";
import "./style.css";

const ChatListInd = ({ src, name, msg }) => {
  return (
    <div>
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
    </div>
  );
};

export default ChatListInd;
