import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import Imageicon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderviewDayIcon from "@material-ui/icons/CalendarViewDay";

import "./Feed.css";
import InputOptions from "./InputOptions";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions title="Photo" Icon={Imageicon} color="#70B5F9" />
          <InputOptions title="Video" Icon={SubscriptionIcon} color="#E7A33E" />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOptions
            title="Write article"
            Icon={CalenderviewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
