import { Brightness6Sharp } from "@material-ui/icons";
import React, { useState } from "react";
import "../otherIcon/style.css"

const CustomColor = { color: "rgba(155, 81, 224, 1)" };

const DarkModeIcon = () => {
    const [isDark, setIsDark]=useState(false);
    const handleclick=()=>{
        setIsDark(!isDark);
    }
  return (
    <>
      <div>
        <button className={isDark?"outer_div rotator":"outer_div"} onClick={handleclick}>
          <div className="inner_div"><Brightness6Sharp style={CustomColor} /></div>
        </button>
      </div>
    </>
  );
};

export default DarkModeIcon;
