// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCunytHYhrtomdN8YQx9YWnjXPRDJ7Wdu8",
  authDomain: "fir-backend-e2967.firebaseapp.com",
  projectId: "fir-backend-e2967",
  storageBucket: "fir-backend-e2967.firebasestorage.app",
  messagingSenderId: "265742405462",
  appId: "1:265742405462:web:4b7a88caaa5f782b4dd0f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);