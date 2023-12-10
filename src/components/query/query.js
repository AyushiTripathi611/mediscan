import React, { useState } from 'react';
import './Query.css';

const Query = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setChat([...chat, userMessage]);

    // Simulate a response from the chatbot (replace with actual logic)
    setTimeout(() => {
      const botResponse = { text: 'This is a chatbot response.', isUser: false };
      setChat([...chat, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {chat.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Query;
