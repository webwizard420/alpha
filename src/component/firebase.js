import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAeOJo34OkhN04kJAVZbEPBPjeMZO7IWbY",
    authDomain: "login-69fc3.firebaseapp.com",
    projectId: "login-69fc3",
    storageBucket: "login-69fc3.appspot.com",
    messagingSenderId: "299500896792",
    appId: "1:299500896792:web:2dbb2638557a3b6d88396d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
