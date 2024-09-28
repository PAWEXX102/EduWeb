import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-O8XCce0Vtxkdunhxzm3s34a2Ski03No",
  authDomain: "hackaton-2801a.firebaseapp.com",
  projectId: "hackaton-2801a",
  storageBucket: "hackaton-2801a.appspot.com",
  messagingSenderId: "1015176062875",
  appId: "1:1015176062875:web:c585f6f2387b45088f633e",
  measurementId: "G-SL27YS78XG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
