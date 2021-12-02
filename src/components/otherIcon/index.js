import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const IconSide = ({Icon}) => {
  return (
    <>
          <button className="outer_div">
            <div className="inner_div">{Icon}</div>
          </button>
    </>
  );
};

export default IconSide;
