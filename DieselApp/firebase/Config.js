import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDZiJmNsLbwl8MrCgtmU42A1hCdjZox168",
    authDomain: "diesel-app-6a68f.firebaseapp.com",
    projectId: "diesel-app-6a68f",
    storageBucket: "diesel-app-6a68f.appspot.com",
    messagingSenderId: "7278316303",
    appId: "1:7278316303:web:4e4c9e95f90ab7c6ac0c7a",
    measurementId: "G-1F7ELQZYNK"
  };
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);