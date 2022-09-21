import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkqYIAh2PSkmDGAGnsto0pfQ3Sd_N9IwU",
  authDomain: "video-c29cb.firebaseapp.com",
  projectId: "video-c29cb",
  storageBucket: "video-c29cb.appspot.com",
  messagingSenderId: "699707380534",
  appId: "1:699707380534:web:239e30c4d6d2f000b15997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;