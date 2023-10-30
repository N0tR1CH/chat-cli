import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCxJT3EsjSsc5ikd0Dw8TPAcPCVxcd3TE",
  authDomain: "chat-3e836.firebaseapp.com",
  projectId: "chat-3e836",
  storageBucket: "chat-3e836.appspot.com",
  messagingSenderId: "721141146575",
  appId: "1:721141146575:web:da4e674b56a767d8a8a8ba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
