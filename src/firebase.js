
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-4627045237-a2fe9",
  "appId": "1:612847421952:web:d66d4ba0666e7f5116e6e5",
  "databaseURL": "https://studio-4627045237-a2fe9-default-rtdb.firebaseio.com",
  "storageBucket": "studio-4627045237-a2fe9.firebasestorage.app",
  "apiKey": "AIzaSyDh7to-ioQOrlwIuvrmmNV1O9sY-eSD5LM",
  "authDomain": "studio-4627045237-a2fe9.firebaseapp.com",
  "messagingSenderId": "612847421952"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
