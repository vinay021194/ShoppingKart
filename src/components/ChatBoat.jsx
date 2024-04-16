import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Navbar from "./navbar";

function ChatBoat() {
  const [userMessages, setUserMessages] = useState([]);
  const [senderMessages, setSenderMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();
    const message = { message: userMessage, side: "left" };
    setUserMessages([...userMessages, message]);
    setSenderMessages([...senderMessages, message]);
    setUserMessage("");
  };

  const handleSenderMessageSubmit = (e) => {
    e.preventDefault();
    const message = { message: senderMessage, side: "right" };
    setUserMessages([...userMessages, message]);
    setSenderMessages([...senderMessages, message]);
    setSenderMessage("");
  };
  const handleClearChatUser = () => {
    setUserMessages([]);
  };
  const handleClearChatSender = () => {
    setSenderMessages([]);
  };

  return (
    <>
      <></>
      <Navbar />
      <div className="App">
        <div className="chat-container">
          <div className="chat-box">
            <h2>User 1</h2>
            <div className="messages">
              {userMessages.map((message, index) => (
                <div key={index} className={`message ${message.side}`}>
                  {message.message}
                </div>
              ))}
            </div>
            <form onSubmit={handleUserMessageSubmit}>
              <input
                type="text"
                placeholder="Type a message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <button type="button" onClick={handleClearChatUser}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </form>
          </div>
          <div className="chat-box">
            <h2>User 2</h2>
            <div className="messages">
              {senderMessages.map((message, index) => (
                <div key={index} className={`message ${message.side}`}>
                  {message.message}
                </div>
              ))}
            </div>
            <form onSubmit={handleSenderMessageSubmit}>
              <input
                type="text"
                placeholder="Type a message..."
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <button type="button" onClick={handleClearChatSender}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoat;
