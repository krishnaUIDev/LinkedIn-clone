import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Imageicon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderviewDayIcon from "@material-ui/icons/CalendarViewDay";
import { auth, db } from "./firebase";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {}, [
    db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      ),
  ]);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
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
      <FlipMove>
        {posts &&
          posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
              />
            )
          )}
      </FlipMove>
    </div>
  );
};

export default Feed;
