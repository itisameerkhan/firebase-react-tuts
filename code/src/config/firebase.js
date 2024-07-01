import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvLoSGdHvB_UqfghWqyZsuOk-aL2ovQdA",
  authDomain: "fir-tuts-1-babf8.firebaseapp.com",
  projectId: "fir-tuts-1-babf8",
  storageBucket: "fir-tuts-1-babf8.appspot.com",
  messagingSenderId: "977506235538",
  appId: "1:977506235538:web:b50c1c94844669c245e24b",
  measurementId: "G-E8YLZK2ECL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();