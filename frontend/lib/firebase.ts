import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // Replace these with your Firebase config values
    apiKey: "AIzaSyBi8eLRRfp_0SMW5QTGSERA80YCPuaD9iY",
    authDomain: "support-medical.firebaseapp.com",
    projectId: "support-medical",
    storageBucket: "support-medical.firebasestorage.app",
    messagingSenderId: "899034922738",
    appId: "1:899034922738:web:6afd32b67e53b823e9da6b"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 