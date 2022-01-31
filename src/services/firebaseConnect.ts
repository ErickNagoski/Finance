import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyAA7x3xknpJsP712WQTpnVyHNtlkWN3TTY",
    authDomain: "finance-121a2.firebaseapp.com",
    projectId: "finance-121a2",
    storageBucket: "finance-121a2.appspot.com",
    messagingSenderId: "88671594357",
    appId: "1:88671594357:web:b276daaac20b6cd4dfd53c",
    measurementId: "G-Q4H2GFNMGL"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;