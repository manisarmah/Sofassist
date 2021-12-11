import React from "react";
import EncryptedDialog from "../encryptedDialog";
import "./styles.css";
import messages from "../messages";
const ChatInterfaceMain = () => {
  return (
    <div>
      <div className="encryptedDialog">
        <EncryptedDialog />
      </div>
      <div className="chatMain">
        {messages.map((message) => (
          <div className="chatMainDiv">
            <p
              className={
                message.status == "sent" ? "chatMainRight" : "chatMainLeft"
              }
            >
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterfaceMain;
