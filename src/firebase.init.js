// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg1EHY9ckoTpHV2rniTgDbOzKnZGL2fuE",
  authDomain: "doctors-portal-ebba9.firebaseapp.com",
  projectId: "doctors-portal-ebba9",
  storageBucket: "doctors-portal-ebba9.appspot.com",
  messagingSenderId: "638550121460",
  appId: "1:638550121460:web:f8f175b3e8b2c0847ef7a1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;