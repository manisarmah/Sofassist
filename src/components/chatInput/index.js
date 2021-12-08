import React from "react";
import "./styles.css";
import { Add } from "@material-ui/icons";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Picker from "emoji-picker-react";
const ChatInput = () => {
  const [inputStr, setInputStr] = React.useState("");
  const [showPicker, setShowPicker] = React.useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(true);
  };

  return (
    <div className="master_div_input">
      <div className="emojiPicker">
        {showPicker && (
          <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{ width: "260px", height: "270px" }}
          />
        )}
      </div>
      <div className="searchBarInput">
        <div className="searchBarAdd">
          <Add size={{ fontSize: 40 }} style={{ color: "#828282" }} />
        </div>
        <div className="searchBarMain">
          <input
            type="text"
            placeholder="Your Message"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />
        </div>
        <div className="searchBarIcons">
          <button>
            <TimerOutlinedIcon
              size={{ fontSize: 30 }}
              style={{ color: "#828282" }}
            />
          </button>
          <button onClick={() => setShowPicker((val) => !val)}>
            {" "}
            <EmojiEmotionsOutlinedIcon
              size={{ fontSize: 30 }}
              style={{ color: "#828282" }}
            />
          </button>
          <button>
            <KeyboardVoiceOutlinedIcon
              size={{ fontSize: 30 }}
              style={{ color: "#828282" }}
            />
          </button>
        </div>
      </div>
      <div className="sendInput">
        <button>
          <SendOutlinedIcon
            size={{ fontSize: 25 }}
            style={{ color: "#9B51E0", fontWeight: "300" }}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
