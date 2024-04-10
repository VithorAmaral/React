import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDrUX7PjOhu7mH373y2pZJ1pF4SbdgCUas",
    authDomain: "curso-62483.firebaseapp.com",
    projectId: "curso-62483",
    storageBucket: "curso-62483.appspot.com",
    messagingSenderId: "54613888986",
    appId: "1:54613888986:web:00d535aaca84d0fb177ae3",
    measurementId: "G-FT7V1RB7EC"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };