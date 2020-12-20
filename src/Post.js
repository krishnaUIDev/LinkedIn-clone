import React from "react";
import { Avatar } from "@material-ui/core";
import Like from "@material-ui/icons/ThumbUpAltOutlined";
import Comment from "@material-ui/icons/ChatOutlined";
import Share from "@material-ui/icons/ShareOutlined";
import Send from "@material-ui/icons/SendOutlined";

import InputOptions from "./InputOptions";
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p> {message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={Like} title="Like" color="gray" />
        <InputOptions Icon={Comment} title="Comment" color="gray" />
        <InputOptions Icon={Share} title="Share" color="gray" />
        <InputOptions Icon={Send} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
