// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFgbEeaU0xb05Zk58cSj8sjsjWitBhY2E",
  authDomain: "twitter-clone-93114.firebaseapp.com",
  projectId: "twitter-clone-93114",
  storageBucket: "twitter-clone-93114.appspot.com",
  messagingSenderId: "118903974792",
  appId: "1:118903974792:web:e17772869743b0e899283d",
  measurementId: "G-DPVR0DLYSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
