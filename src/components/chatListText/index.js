import React from 'react'
import "./style.css";


const ChatListText = ({name,msg}) => {
    return (
        <div className="chatList_texts">
            <h1>{name}</h1>
            <p>{msg}</p>
        </div>
    )
}

export default ChatListText
