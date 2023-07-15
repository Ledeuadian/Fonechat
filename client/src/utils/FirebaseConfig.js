// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVs21Lj_uctXM1RuEmzA4m16gnVjZlTI",
  authDomain: "foneapi-chat.firebaseapp.com",
  projectId: "foneapi-chat",
  storageBucket: "foneapi-chat.appspot.com",
  messagingSenderId: "219190205773",
  appId: "1:219190205773:web:9e6943f5879990914aab04",
  measurementId: "G-B2FS820KRG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);