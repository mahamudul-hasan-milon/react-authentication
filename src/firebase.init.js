// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZESvcpoimed_QU8TsYZDIlrhs6lhLZvA",
  authDomain: "auth-next-step.firebaseapp.com",
  projectId: "auth-next-step",
  storageBucket: "auth-next-step.firebasestorage.app",
  messagingSenderId: "1062298878656",
  appId: "1:1062298878656:web:82ebb2c54a32bd90026325",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
