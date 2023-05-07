import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFq7yU2IimlyI3xo300D1eAs9DIxLiXY4",
  authDomain: "fir-teste-95017.firebaseapp.com",
  projectId: "fir-teste-95017",
  storageBucket: "fir-teste-95017.appspot.com",
  messagingSenderId: "829500177438",
  appId: "1:829500177438:web:651d7c0a36dc9f3f59420f",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
