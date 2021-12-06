import React from "react";
import "./style.css";

const IconSide = ({ Icon, iterator, handleClick, index, isClicked }) => {
  return (
    <>
      <div className={isClicked ? "onClickOuter" : ""}>
        <button className="outer_div" onClick={() => handleClick(index)}>
          <div className="inner_div">{Icon}</div>
        </button>
      </div>
    </>
  );
};

export default IconSide;
