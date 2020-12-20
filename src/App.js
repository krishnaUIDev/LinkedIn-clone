import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
      {/*  Widgets*/}
    </div>
  );
}

export default App;
