import { useState } from "react";
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'

const App = () => {

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
      { text: "AI's response goes here", sender: "ai" }, // Replace with AI's actual response
    ]);
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100 p-4">
      <ChatHistory messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App