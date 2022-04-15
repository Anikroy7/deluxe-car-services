// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_ZhTBaD9yeb9eiZnLZQIjXl909aZg5l8",
    authDomain: "deluxe-car-services.firebaseapp.com",
    projectId: "deluxe-car-services",
    storageBucket: "deluxe-car-services.appspot.com",
    messagingSenderId: "679249083864",
    appId: "1:679249083864:web:276ae9ad060bc4e92a86ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;