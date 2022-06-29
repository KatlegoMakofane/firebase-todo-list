import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGVviSQncSmKiGuc25pZUlSH369rZ0WfQ",
  authDomain: "silicon-mile-293907.firebaseapp.com",
  projectId: "silicon-mile-293907",
  storageBucket: "silicon-mile-293907.appspot.com",
  messagingSenderId: "627049101015",
  appId: "1:627049101015:web:e7cd103f9ac25a39faa292"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
