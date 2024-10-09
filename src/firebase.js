import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCOFaQfoKo9u3JsAWAWuRvhwUDYCeSpBvE",
    authDomain: "filmbro-db.firebaseapp.com",
    databaseURL: "https://filmbro-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "filmbro-db",
    storageBucket: "filmbro-db.appspot.com",
    messagingSenderId: "491900038607",
    appId: "1:491900038607:web:621f6ab8f7057506e476ba",
    measurementId: "G-PG2MFPX63M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export default app;
