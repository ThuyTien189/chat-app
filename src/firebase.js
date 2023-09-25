import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN_AAXfxm-rvL8cFZhoBxfBiGpnKK6EBI",
  authDomain: "chatapp-98815.firebaseapp.com",
  projectId: "chatapp-98815",
  storageBucket: "chatapp-98815.appspot.com",
  messagingSenderId: "717933269374",
  appId: "1:717933269374:web:d24ef91f1cb3873c55232f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()