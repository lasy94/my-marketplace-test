// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDex-mONo95CjzFeJHGsoJqgvxWDciE4NU",
  authDomain: "my-marketplace-test.firebaseapp.com",
  projectId: "my-marketplace-test",
  storageBucket: "my-marketplace-test.firebasestorage.app",
  messagingSenderId: "835923114859",
  appId: "1:835923114859:web:a7e6adf757fa3d44692a2e",
  measurementId: "G-S6MH7NWQ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
