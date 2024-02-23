// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiF84c_wRwgZV_2yHUm3cSeId0OrIrj2s",
  authDomain: "chat-next-firebase-6b4ad.firebaseapp.com",
  projectId: "chat-next-firebase-6b4ad",
  storageBucket: "chat-next-firebase-6b4ad.appspot.com",
  messagingSenderId: "392664566010",
  appId: "1:392664566010:web:1bfb522f00c5e66226a143",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
