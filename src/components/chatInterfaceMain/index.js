import React from "react";
import EncryptedDialog from "../encryptedDialog";
import "./styles.css";
import messages from "../messages";
import symbols from "../symbols";
const ChatInterfaceMain = () => {
  return (
    <div>
      <div className="encryptedDialog">
        <EncryptedDialog />
      </div>
      <div className="chatMain">
        {messages.map((message) => (
          <div className="chatMainDiv">
            <div
              className={
                message.status === 3 ? "chatMainLeft" : "chatMainRight"
              }
            >
              <div> {message.message}</div>
              <div className="sentStatus">
                {" "}
                {message.status !== 3 && (
                  <div className="iconStatus">{symbols[message.status]}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterfaceMain;
