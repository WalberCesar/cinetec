
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKTA_P7DstX4lkwcBL4BsPPbm1uXTgXGg",
    authDomain: "cinetec-8a136.firebaseapp.com",
    databaseURL: "https://cinetec-8a136-default-rtdb.firebaseio.com",
    projectId: "cinetec-8a136",
    storageBucket: "cinetec-8a136.appspot.com",
    messagingSenderId: "119993149667",
    appId: "1:119993149667:web:6387b7f395c7c16ae9bdd6"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


