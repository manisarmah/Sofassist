import React from "react";
import "./style.css";
import ChatInterfaceTopBar from "../ChatInterfaceTopBar";
import ChatInput from "../chatInput";
import ChatInterfaceMain from "../chatInterfaceMain";

const ChatInterface = () => {
  return (
    <div className="chat_interface_container">
      <div className="chat_interface_top_bar">
        <ChatInterfaceTopBar />
      </div>
      <div className="chat_interface_main">
        <ChatInterfaceMain />
      </div>
      <div className="chat_interface_input">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatInterface;
