import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

export default function Join() {
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");
  return (
    <div className="Join">
      <div className="Join-container">
        <h1 className="Join-header">Join</h1>
        <div className="Join-input__wrapper">
          <input
            type="text"
            className="Join-input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="Join-input__wrapper">
          <input
            type="text"
            className="Join-input"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <div className="Join-link__wrapper">
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            className="Join-link__btn"
          >
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}
