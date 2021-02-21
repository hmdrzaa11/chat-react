import React from "react";
import "./Input.css";

export default function Input({ handleKeyPress, message, setMessage }) {
  return (
    <div className="Input">
      <div className="Input-wrapper">
        <input
          className="Input-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
}
