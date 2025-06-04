// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7HVvTTaorOS27YPdzRG09yme9bi1lWs",
  authDomain: "toitenlong123-35020.firebaseapp.com",
  projectId: "toitenlong123-35020",
  storageBucket: "toitenlong123-35020.firebasestorage.app",
  messagingSenderId: "251868262730",
  appId: "1:251868262730:web:7e8babf3f470eb1e6151b3",
  measurementId: "G-920NYMC1FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);