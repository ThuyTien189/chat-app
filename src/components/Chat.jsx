import React, { useContext } from "react";

import Cam from "../../public/assets/images/cam.png";
import Add from "../../public/assets/images/add.png";
import More from "../../public/assets/images/more.png";
import MessageList from "./MessageList";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span style={{ fontSize: "20px", textTransform: "uppercase" }}>
          {data.user?.displayName}
        </span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <MessageList />
      <Input />
    </div>
  );
};

export default Chat;
