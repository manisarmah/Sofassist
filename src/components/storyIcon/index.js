import React, { useState } from "react";

import "./style.css";
const StoryIcon = ({ src }) => {
  const [isSeen, setIsseen] = useState(false);
  const handleClick = () => {
    setIsseen(true);
  };
  return (
    <div className="container_story">
      <div
        className={isSeen ? "outer_story_seen" : "outer_story_div"}
        onClick={handleClick}
      >
        <div className="inner_story_div">
          <img src={src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StoryIcon;
