import React from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import StorySlider from "../storySlider";

const TopNav = () => {
  return (
    <div className="wrapper_top">
      <div className="moments">
        <div className="inner_moment">
          <p>Moments</p>
          <button>
            <AddIcon style={{ color: "rgba(155, 81, 224, 1)" }} />
          </button>
        </div>
      </div>
      <div className="stories">
      <StorySlider/>
      </div>
    </div>
  );
};

export default TopNav;
