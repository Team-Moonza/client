import React from "react";
import { Switch, Route } from "react-router-dom";
import { Profile, Login } from "./pages";

function App() {
  return (
    <>
      <Profile />
      <Login />
    </>
  );
}

export default App;
