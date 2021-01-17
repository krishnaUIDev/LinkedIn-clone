import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Feed from "./Feed/Feed";
import "./App.css";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./Login/Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";
import UserForm from "./Form/UserForm";

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
  return <UserForm />;
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
