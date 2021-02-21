import React from "react";
import "./Messages.css";
import Message from "../Message/Message";
import ReactScroll from "react-scroll-to-bottom";
import Loader from "../Loader/Loader";

export default function Messages({ messages, name }) {
  let renderMessages = () => {
    if (messages.length) {
      return messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ));
    } else {
      return (
        <div className="Messages-loader-wrapper">
          <Loader />
        </div>
      );
    }
  };

  return (
    <div className="Messages">
      <ReactScroll className="Messages-wrapper">{renderMessages()}</ReactScroll>
    </div>
  );
}
