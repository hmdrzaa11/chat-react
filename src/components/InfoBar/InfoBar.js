import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/iconfinder_icon-close_211652.svg";
import { Link } from "react-router-dom";

export default function InfoBar({ room, allUsers }) {
  console.log(allUsers);
  return (
    <div className="InfoBar">
      <div className="InfoBar-room">
        <p>{room}</p>
        <p className="InfoBar-total">Online : {allUsers.length}</p>
      </div>

      <Link to="/">
        <img src={closeIcon} alt="close" className="InfoBar-icon" />
      </Link>
    </div>
  );
}
