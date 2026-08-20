import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDON-QxkU5Of4IGKuNfBmj6O1G42IJFVoI",
    authDomain: "twitter-723da.firebaseapp.com",
    projectId: "twitter-723da",
    storageBucket: "twitter-723da.firebasestorage.app",
    messagingSenderId: "68443773884",
    appId: "1:68443773884:web:a4fe97e4bb316dde18e9b9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
