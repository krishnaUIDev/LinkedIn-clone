import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>kk</h2>
        <h4>kkasdf</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who view you</p>
          <p className="sidebar_statNumber">234</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">234</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("desing")}
        {recentItem("developer")}
        {recentItem("reactJS")}
        {recentItem("angularJS")}
      </div>
    </div>
  );
};

export default SideBar;
