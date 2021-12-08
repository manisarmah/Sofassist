import React from "react";
import './style.css'
// import ProfilePic from '../StoryImages/images'


const ChatListProfile = ({src}) => {
  return (
    <div>
      <div className="profile_chatlist">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default ChatListProfile;
