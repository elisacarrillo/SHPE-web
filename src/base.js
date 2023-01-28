// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import {connectFirestoreEmulator} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgs19a9MgEKr0aHzLYWBwWDSZ0CN-TaCk",
  authDomain: "shpe-website-uiuc.firebaseapp.com",
  projectId: "shpe-website-uiuc",
  storageBucket: "shpe-website-uiuc.appspot.com",
  messagingSenderId: "384735971898",
  appId: "1:384735971898:web:c3d39d476b5e78df874303",
  measurementId: "G-MWVBFPF5Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);

