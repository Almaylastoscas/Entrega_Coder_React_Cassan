import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1tb4ZDHSYusgUTUnVdKzkhEya4WvilZ4",
  authDomain: "ecomercereact-13347.firebaseapp.com",
  projectId: "ecomercereact-13347",
  storageBucket: "ecomercereact-13347.appspot.com",
  messagingSenderId: "647204185040",
  appId: "1:647204185040:web:655d708fbf810063e3cfd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
