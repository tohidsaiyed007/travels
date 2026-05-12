import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXtRBQkyd41UzBSik8E0nDCBc-NjjPbf4",
  authDomain: "sayyed-travels.firebaseapp.com",
  projectId: "sayyed-travels",
  storageBucket: "sayyed-travels.firebasestorage.app",
  messagingSenderId: "502842603110",
  appId: "1:502842603110:web:03533df994ae2674a89fa7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);