// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC__rPaqMcyjUIU9oVPjh2_wFxknYPbYxY",
  authDomain: "onnorokompathsala.firebaseapp.com",
  projectId: "onnorokompathsala",
  storageBucket: "onnorokompathsala.appspot.com",
  messagingSenderId: "112078201777",
  appId: "1:112078201777:web:0b39e81a2d0e0f9f541390",
  measurementId: "G-TF71J7FCH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;