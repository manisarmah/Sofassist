import React from 'react'
import ChatInterfaceTopBar from '../ChatInterfaceTopBar'
import './style.css'

const ChatInterface = () => {
    return (
        <div className="chat_interface_container">
            <div className="chat_interface_top_bar">
                <ChatInterfaceTopBar/>
            </div>
            <div className="chat_interface_main"></div>
            <div className="chat_interface_input"></div>
        </div>
    )
}

export default ChatInterface
