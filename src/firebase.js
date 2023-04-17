import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBw4eKqb7fvAz0srg4Pym_1yakEvy3tubk",
    authDomain: "line-clone-fe3b4.firebaseapp.com",
    projectId: "line-clone-fe3b4",
    storageBucket: "line-clone-fe3b4.appspot.com",
    messagingSenderId: "149957576718",
    appId: "1:149957576718:web:57a3fd24f546d01576545f"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};