import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ainotesgenerator-f27e7.firebaseapp.com",
  projectId: "ainotesgenerator-f27e7",
  storageBucket: "ainotesgenerator-f27e7.firebasestorage.app",
  messagingSenderId: "95321208788",
  appId: "1:95321208788:web:64c9cd03922f02b2968841",
  measurementId: "G-L7L0RCT6WY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };