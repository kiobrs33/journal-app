import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBb4WKLMkYhZwd8CHqoXy8VnZ6BoQA94is",
    authDomain: "fir-ebc49.firebaseapp.com",
    projectId: "fir-ebc49",
    storageBucket: "fir-ebc49.appspot.com",
    messagingSenderId: "189699025834",
    appId: "1:189699025834:web:93ee2864b5a22ecded99d3",
    measurementId: "G-PKEG6MXG7G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}