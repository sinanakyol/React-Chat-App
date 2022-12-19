import { useState } from "react";

import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    // önceki mesajları da göstermek için "prevState" kullandık.
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
