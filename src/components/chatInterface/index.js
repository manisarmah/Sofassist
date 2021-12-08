import React from "react";
import "./style.css";
import ChatInput from "../chatInput";

const ChatInterface = () => {
  return (
    <div className="chat_interface_container">
      <div className="chat_interface_top_bar"></div>
      <div className="chat_interface_main"></div>
      <div className="chat_interface_input">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatInterface;
