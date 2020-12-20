import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx7RX04d4V_0An8wVJwdvqWERqwhyW-0A",
  authDomain: "linkedin-187cf.firebaseapp.com",
  projectId: "linkedin-187cf",
  storageBucket: "linkedin-187cf.appspot.com",
  messagingSenderId: "155844854332",
  appId: "1:155844854332:web:78c0501e7bd873fbfdf939",
  measurementId: "G-CS89SVZRY5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
