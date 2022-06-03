// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmmyTLcQUWTqatnN4TTzTcpMHl1DntS6o",
  authDomain: "marvel-c06a2.firebaseapp.com",
  projectId: "marvel-c06a2",
  storageBucket: "marvel-c06a2.appspot.com",
  messagingSenderId: "175553938959",
  appId: "1:175553938959:web:2f055fd627ad89ad65457a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { app, google, facebook };
