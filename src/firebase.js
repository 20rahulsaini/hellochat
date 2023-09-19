import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXTEHr9IPZARvCUa38nwvzv999bmzK-K8",
    authDomain: "firechat-6cff2.firebaseapp.com",
    projectId: "firechat-6cff2",
    storageBucket: "firechat-6cff2.appspot.com",
    messagingSenderId: "630568596852",
    appId: "1:630568596852:web:4ceabe8e435be194c2a821"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };