import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddCommentIcon from "@mui/icons-material/AddComment";
import "./styles.css";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="searchBar">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="contactList">
        <button>
          <div className="contact_list_icon">
            <AddCommentIcon style={{ color: "white" }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
