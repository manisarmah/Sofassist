import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import chatListDetails from "../ChatListDetails/chatListdetails";
import "./style.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const UserProfile = () => {
  return (
    <div className="user_profile_outer_div">
      <div className="user_profile_upper_div_purple">
        <div className="user_profile_text">
        <div className="btn">
          <ArrowBackIosIcon style={{ color: "rgba(155, 81, 224, 1)" }} />
          </div> <div className="user">
            <h1>User Profile</h1>
          </div>
        </div>
        <div className="user_profile_image">
          <img src={chatListDetails[0].image} alt="" />
        </div>
      </div>
      <div className="user_profile_upper_div_white">
        <div className="Input">
          <div className="input_div">
            <input
              type="text"
              disabled
              placeholder=""
              value="Wade Warren"
              required
            />
            <div className="btn">
              <ModeEditOutlinedIcon style={{ color: "#828282" }} />
            </div>
          </div>
          <div className="input_div">
            <input
              type="text"
              disabled
              placeholder=""
              value="wade.warren@app.com"
              required
            />
            <div className="btn">
              <ModeEditOutlinedIcon style={{ color: "#828282" }} />
            </div>
          </div>
          <button className="change_Password">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
