import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT-rDD6TbUsG8BQjkGzF-lBlElHL5B5SE",
    authDomain: "crud-app-69637.firebaseapp.com",
    projectId: "crud-app-69637",
    storageBucket: "crud-app-69637.appspot.com",
    messagingSenderId: "263625351819",
    appId: "1:263625351819:web:8e486baadce50fe09a2a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var googleProvider = new GoogleAuthProvider()

export { auth, googleProvider };