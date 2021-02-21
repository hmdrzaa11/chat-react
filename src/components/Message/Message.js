import React, { useEffect } from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

export default function Message({ message, name }) {
  name = name.trim().toLowerCase();
  let isMyOwnMessage = message.user === name;
  return (
    <div
      className="Message"
      style={{ justifyContent: isMyOwnMessage ? "flex-end" : "flex-start" }}
    >
      <p style={{ order: !isMyOwnMessage && 1 }} className="Message-user">
        {message.user}
      </p>
      <div
        className="Message-box"
        style={{
          backgroundColor: isMyOwnMessage
            ? "var(--color-dark-blue)"
            : "var(--color-light-grey)",
          color: isMyOwnMessage && "white",
        }}
      >
        <p className="Message-text">{ReactEmoji.emojify(message.text)}</p>
      </div>
    </div>
  );
}
