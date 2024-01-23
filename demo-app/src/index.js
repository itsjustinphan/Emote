import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ_Cp6ma7OOUrjUbFSYZ7SFd0enqJQxsA",
  authDomain: "emote-4f6da.firebaseapp.com",
  projectId: "emote-4f6da",
  storageBucket: "emote-4f6da.appspot.com",
  messagingSenderId: "180656089252",
  appId: "1:180656089252:web:b79716f70a4733f9059e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


