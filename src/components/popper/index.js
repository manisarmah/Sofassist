import React,{useState} from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import "./style.css";
const Popper = () => {
  const [isClicked, setisClicked] = useState(false);
  const handleClick = ()=>{
    console.log("hhh")
    setisClicked(!isClicked);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>
          <ClearAllIcon
            style={{ fontSize: "2.2rem", color: "rgba(155, 81, 224, 1)" }}
          />
        </button>
      </div>
    { isClicked && <div className="outer_div_popper">
        <ul>
          <li>Search </li>
          <li>Mute</li>
          <li>Block</li>
          <li>Clear Chat</li>
          <li>Report</li>
        </ul>
      </div>}
    </>
  );
};

export default Popper;
