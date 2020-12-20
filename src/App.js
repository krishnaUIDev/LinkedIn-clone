import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "./App.css";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
        </div>
      )}

      {/*  Widgets*/}
    </div>
  );
}

export default App;
