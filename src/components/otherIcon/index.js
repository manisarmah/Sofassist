import React from "react";
import "./style.css";
import { useState } from "react";

const IconSide = ({ Icon, handleClick, index, isClicked }) => {
  const [isDark, setIsDark] = useState(false);
  const darkModeF = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div className={isClicked && index !== 6 ? "onClickOuter" : ""}>
        <button
          className={index === 6 ? "darkMode" : "outer_div"}
          onClick={() => handleClick(index)}
        >
          <div
            className={isDark ? "inner_div rotator" : "inner_div"}
            onClick={index === 6 && darkModeF}
          >
            {Icon}
          </div>
        </button>
      </div>
    </>
  );
};

export default IconSide;
