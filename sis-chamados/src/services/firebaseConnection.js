
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDXu3rxfeau1vSyOimtescG-3Ljbxh9MNc",
  authDomain: "chamados-c9480.firebaseapp.com",
  projectId: "chamados-c9480",
  storageBucket: "chamados-c9480.appspot.com",
  messagingSenderId: "1037724023981",
  appId: "1:1037724023981:web:78e0370bdade392b47da24",
  measurementId: "G-FK88R0306S"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };