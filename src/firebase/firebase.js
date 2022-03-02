import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUGw26aWGz-OqJm-gBLtlU9tRCWrY1ll4",
  authDomain: "authentication-recipe.firebaseapp.com",
  projectId: "authentication-recipe",
  storageBucket: "authentication-recipe.appspot.com",
  messagingSenderId: "636881592616",
  appId: "1:636881592616:web:d913b9fc2770f1269f301d",
  measurementId: "G-ZTWDC27GQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
