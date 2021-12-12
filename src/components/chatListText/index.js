import React from "react";
import "./style.css";

const ChatListText = ({ name, msg }) => {
  return (
    <div className="chatList_texts">
      <div className="msg_text">
        <h1>{name}</h1>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ChatListText;
