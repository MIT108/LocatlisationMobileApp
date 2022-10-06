import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBS7kYVXi7t8zwxw2kWr_in9jx6bNLBoCo",
    authDomain: "locationapp-af1d2.firebaseapp.com",
    projectId: "locationapp-af1d2",
    storageBucket: "locationapp-af1d2.appspot.com",
    messagingSenderId: "865129324075",
    appId: "1:865129324075:web:a99b5d696a8790641fd46e"
}; 
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app, firebaseConfig };