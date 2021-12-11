import React from "react";
import EncryptedDialog from "../encryptedDialog";
const ChatInterfaceMain = () => {
  return (
    <div>
      <div className="encryptedDialog">
        <EncryptedDialog />
      </div>
      <div className="chatMain">
        <div className="chatMainLeft"></div>
        <div className="chatMainRight"></div>
      </div>
    </div>
  );
};

export default ChatInterfaceMain;
