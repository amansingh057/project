import axios from "axios";
import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
const ChatDisplay = ({ user, clickedUser }) => {
  const [userMessages, setUserMessages] = useState(null);
  const userId = user?.user_id
  const clickedUserId = clickedUser?.user_id
  const getUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { userId: userId, correspondingUserId: clickedUserId },
      });
      setUserMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsersMessages();
  }, [userMessages]);

  console.log(userMessages);

  return (
    <>
      <Chat />
      <ChatInput />
    </>
  );
};

export default ChatDisplay;
