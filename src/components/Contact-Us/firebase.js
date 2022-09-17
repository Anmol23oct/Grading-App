
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoGCLjKbUpAmyoksF5-Tl8rto4Jo31sqM",
  authDomain: "codebench-e1b53.firebaseapp.com",
  databaseURL: "https://codebench-e1b53-default-rtdb.firebaseio.com",
  projectId: "codebench-e1b53",
  storageBucket: "codebench-e1b53.appspot.com",
  messagingSenderId: "1085014647930",
  appId: "1:1085014647930:web:b2c1a10e5889f51beb47c3",
  measurementId: "G-V92S346SJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);
export {db,storage};