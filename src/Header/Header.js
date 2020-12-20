import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Network from "@material-ui/icons/SupervisorAccount";
import Jobs from "@material-ui/icons/Business";
import Messaging from "@material-ui/icons/Chat";
import Notifications from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";

import "./Header.css";
import HeaderOption from "../HeaderOptions/HeaderOptons";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={Network} />
        <HeaderOption title="Jobs" Icon={Jobs} />
        <HeaderOption title="Messaging" Icon={Messaging} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
};

export default Header;
