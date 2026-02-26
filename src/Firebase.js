// src/Firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb1loIiCTBTHGgpqsO2F9p2d5S0vUg8IY",
  authDomain: "poeage-digital-marketing.firebaseapp.com",
  projectId: "poeage-digital-marketing",
  storageBucket: "poeage-digital-marketing.firebasestorage.app",
  messagingSenderId: "934494846990",
  appId: "1:934494846990:web:810422bf7f6a8a9b41bc5f",
  measurementId: "G-T7EYRLHCGE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore
export const db = getFirestore(app);

// ✅ Export Storage
export const storage = getStorage(app);



