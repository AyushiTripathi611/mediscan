import React, { useEffect, useRef, useState } from 'react';
import './Query.css';

const Query = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([{text:'How can I help you?', isUser: false}]);
  const chatRef = useRef()

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setChat((prev) =>[...prev, userMessage]);

    // Simulate a response from the chatbot (replace with actual logic)
    setTimeout(() => {
      const botResponse = { text: 'This is a chatbot response.', isUser: false };
      setChat((prev) => [...prev, botResponse]);
    }, 1000);
    setInput('');
  };

useEffect(() => {
    // Scroll to the bottom when the component is mounted or updated
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat]);

  return (
    <div className="flex flex-col w-10/12 h-[500px] mx-auto border rounded-md mt-10 justify-between">
      <div ref={chatRef} className="w-full overflow-auto">
        {chat.map((message, index) => (
          <div className={`w-full flex ${message.isUser && 'justify-end'}`}>
          <div key={index} className={message.isUser ? 'user-message w-fit' : 'bot-message w-fit'}>
            {message.text}
          </div></div>
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
