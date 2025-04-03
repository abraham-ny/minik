// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDdJetfyAwQqsYVKp5a8hGxC1fzQfSkA",
  authDomain: "minik-2486f.firebaseapp.com",
  projectId: "minik-2486f",
  storageBucket: "minik-2486f.firebasestorage.app",
  messagingSenderId: "507980853656",
  appId: "1:507980853656:web:7df4cf83dec459979c3bed",
  measurementId: "G-T6YDSQWTSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);