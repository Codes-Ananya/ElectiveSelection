// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = require('firebase/app');
require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyBl0PVWbGwvh_8c5jG1bayOMCoor4Xc6TY",
  authDomain: "elective-selection-dd1e8.firebaseapp.com",
  projectId: "elective-selection-dd1e8",
  storageBucket: "elective-selection-dd1e8.appspot.com",
  messagingSenderId: "534124074777",
  appId: "1:534124074777:web:0288cee04f30b8dfa29788",
  measurementId: "G-5YSHFTLGGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;
