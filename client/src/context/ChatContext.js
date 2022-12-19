import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

// Hook oluşturduk.
export const useChat = () => useContext(ChatContext);
