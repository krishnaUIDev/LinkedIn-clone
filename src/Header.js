import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOptons";
import HomeIcon from "@material-ui/icons/Home";
import Network from "@material-ui/icons/SupervisorAccount";
import Jobs from "@material-ui/icons/Business";
import Messaging from "@material-ui/icons/Chat";
import Notifications from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={Network} />
        <HeaderOption title="Jobs" Icon={Jobs} />
        <HeaderOption title="Messaging" Icon={Messaging} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption avatar="https://compassionate-leakey.jpg" title="me" />
      </div>
    </div>
  );
};

export default Header;
