import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import "./Chat.css";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

export default function Chat(props) {
  let { location, history } = props;
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");
  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");
  let [allUsers, setAllUsers] = useState([]);
<<<<<<< HEAD
=======

>>>>>>> dev
  useEffect(() => {
    let { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
<<<<<<< HEAD
<<<<<<< HEAD
    socket = io("https://chat-server-react-app.herokuapp.com/");

=======
    socket = io("https://chat-server-react-app.herokuapp.com/");
>>>>>>> dev
=======
    socket = io("https://admiring-poitras-1a7b70.netlify.app/");
>>>>>>> dev
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        history.push("/");
      }
    });

    socket.on("roomInfo", (data) => setAllUsers(data.users));

    return () => {
      socket.close();
    };
  }, [location.search, history]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  let sendMessage = (e) => {
    if (e.key === "Enter") {
      if (message) {
        socket.emit("sendMessage", message, () => {
          setMessage("");
        });
      }
    }
  };
<<<<<<< HEAD

=======
>>>>>>> dev
  return (
    <div className="Chat">
      <div className="Chat-wrapper">
        <InfoBar room={room} allUsers={allUsers} />
        <Messages messages={messages} name={name} />
        <Input
          handleKeyPress={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}
