// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGX57dss6XvxeBf9PPsZHyFsMp7bOBTD4",
  authDomain: "fir-crud-4f90d.firebaseapp.com",
  projectId: "fir-crud-4f90d",
  storageBucket: "fir-crud-4f90d.appspot.com",
  messagingSenderId: "44004282590",
  appId: "1:44004282590:web:aa5ed10deed298cb21f24f",
  measurementId: "G-X98EWQH298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)