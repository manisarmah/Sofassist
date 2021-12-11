import React from "react";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import chatListDetails from "../ChatListDetails/chatListdetails";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
const OtherProfile = () => {
  return (
    <div className="outer_div_other_profile">
      <div className="upper_div_purple">
        <div className="text">
          <div className="btn">
            <ArrowBackIosIcon style={{ color: "rgba(155, 81, 224, 1)" }} />
          </div>
          <h4>Profile</h4>
        </div>
        <div className="image">
          <img src={chatListDetails[0].image} alt="" />
        </div>
      </div>
      <div className="upper_div_white">
        <div className="text">
          <h2>Wade Warren</h2>
        </div>
        <div className="photos_video">
          <div className="inner_wrapper">
            <div className="text_photo_vdo">Photos / Videos:</div>
            <div className="contents">
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <button className="view_all">
                <ArrowCircleRightOutlinedIcon
                  style={{ fontSize: "2rem", color: "#828282" }}
                />
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
