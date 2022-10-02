import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbXoK28ZamymeN2y8cMI2lN3Lr0dHY0PU",
  authDomain: "chatapp-90810.firebaseapp.com",
  projectId: "chatapp-90810",
  storageBucket: "chatapp-90810.appspot.com",
  messagingSenderId: "448740765631",
  appId: "1:448740765631:web:715203031c74d655d77b0a",
  measurementId: "G-FL46Y3FL4E"
};
//Khởi tạo firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();