import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjesYA3gi3Ky3wtP1irLHkGP4BeLAdWFs",
  authDomain: "bytebase-login-clone.firebaseapp.com",
  projectId: "bytebase-login-clone",
  storageBucket: "bytebase-login-clone.firebasestorage.app",
  messagingSenderId: "921032595768",
  appId: "1:921032595768:web:21076813d728546fdf89cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();

