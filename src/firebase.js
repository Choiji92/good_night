// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi4xfLpy8y2-cpx-PWoD9t6gXrqrPnjFg",
  authDomain: "react-f0076.firebaseapp.com",
  projectId: "react-f0076",
  storageBucket: "react-f0076.appspot.com",
  messagingSenderId: "369012741799",
  appId: "1:369012741799:web:c77c2fd24e2db9d3032d82",
  measurementId: "G-2YRCHCQVSK"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const storage = getStorage()

