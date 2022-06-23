import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDI4msH2mGqFY-ZkWcTILUuGzHhsQHFDzw",
    authDomain: "raul-s-shop.firebaseapp.com",
    projectId: "raul-s-shop",
    storageBucket: "raul-s-shop.appspot.com",
    messagingSenderId: "377810338353",
    appId: "1:377810338353:web:650394ca8ee7716f344b10",
    measurementId: "G-L7D3XRX7XM"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth()