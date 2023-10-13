import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpEVsmCmPKBJuzvRPu-xOCvkZYWYbdlGk",
  authDomain: "netflix-clone-fb048.firebaseapp.com",
  projectId: "netflix-clone-fb048",
  storageBucket: "netflix-clone-fb048.appspot.com",
  messagingSenderId: "5276557240",
  appId: "1:5276557240:web:8cf5ee664a6ed796e6f94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let Auth = getAuth(app)
export let Database = getFirestore(app)
