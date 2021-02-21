import React, { useEffect, useRef } from "react";
import "./Messages.css";
import Message from "../Message/Message";
import ReactScroll from "react-scroll-to-bottom";

export default function Messages({ messages, name }) {
  let renderMessages = () => {
    if (messages) {
      return messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ));
    }
  };

  return (
    <div className="Messages">
      <ReactScroll className="Messages-wrapper">{renderMessages()}</ReactScroll>
    </div>
  );
}
