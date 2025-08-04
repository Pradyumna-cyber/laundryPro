import { initializeApp, getApps  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHJjlBnpzt94nyZFMjL0wgnAUG19tBtjg",
  authDomain: "laundrypro-c63f9.firebaseapp.com",
  projectId: "laundrypro-c63f9",
  storageBucket: "laundrypro-c63f9.firebasestorage.app",
  messagingSenderId: "59516585937",
  appId: "1:59516585937:web:71a1cc8404ae0ef06682f0",
  measurementId: "G-94X01CN012"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };