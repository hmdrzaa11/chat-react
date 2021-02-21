import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}
