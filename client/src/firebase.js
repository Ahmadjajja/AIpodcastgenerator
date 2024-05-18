// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOZ6hhp6twBbgtbScku2dZCfeRqE-kxfE",
  authDomain: "ai-podcast-generator-8858d.firebaseapp.com",
  projectId: "ai-podcast-generator-8858d",
  storageBucket: "ai-podcast-generator-8858d.appspot.com",
  messagingSenderId: "452981338432",
  appId: "1:452981338432:web:fec700ddd1ac13e824caa5",
  measurementId: "G-0Z8FKNE6L7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
