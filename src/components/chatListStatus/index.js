import React from 'react'
import './style.css'
import symbols from '../symbols/index'

const ChatListStatus = () => {
    return (
        <div className="chatListStatus_outer_div">
            <div className="deliverIcon">
                {symbols[2]}
            </div>
            <div className="chatList_time"><p>02:34 am</p></div>
        </div>
    )
}

export default ChatListStatus
