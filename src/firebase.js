// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9uC7pZSWcEFlxwxOVcJ79Qu2XSfdlWEs",
  authDomain: "givesheep-8cc74.firebaseapp.com",
  projectId: "givesheep-8cc74",
  storageBucket: "givesheep-8cc74.appspot.com",
  messagingSenderId: "1035483012783",
  appId: "1:1035483012783:web:0e6e48c7b90ac7686afe5a",
  measurementId: "G-MFJNRMPMZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider(app);

export const auth = getAuth(app);
