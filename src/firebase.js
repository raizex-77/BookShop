// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUTBO8aUR1BwoSG8Z7b10VPxaJ95AEa4g",
  authDomain: "bookshop-d3a19.firebaseapp.com",
  projectId: "bookshop-d3a19",
  storageBucket: "bookshop-d3a19.firebasestorage.app",
  messagingSenderId: "1065256124132",
  appId: "1:1065256124132:web:cc7a5218ef97faa21976f1",
  measurementId: "G-RSER6F9SYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);