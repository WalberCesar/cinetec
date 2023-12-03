
import firebase from 'firebase/compat/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAKTA_P7DstX4lkwcBL4BsPPbm1uXTgXGg",
    authDomain: "cinetec-8a136.firebaseapp.com",
    projectId: "cinetec-8a136",
    storageBucket: "cinetec-8a136.appspot.com",
    messagingSenderId: "119993149667",
    appId: "1:119993149667:web:6387b7f395c7c16ae9bdd6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}

const database = firebase.database()

export { database, firebase }

