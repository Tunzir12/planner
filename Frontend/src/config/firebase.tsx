// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcF6D4CCAbs5Pl683UO2_-cFKkbXH_BNA",
  authDomain: "planner-3cfce.firebaseapp.com",
  projectId: "planner-3cfce",
  storageBucket: "planner-3cfce.firebasestorage.app",
  messagingSenderId: "142519003757",
  appId: "1:142519003757:web:2b2dd1b5702979a430ad64",
  measurementId: "G-TM70FEL0GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);