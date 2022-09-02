
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAf6Po93pG4QIXEL3Q7iUDolMrMVHSjDak",
    authDomain: "ecomm-400ca.firebaseapp.com",
    projectId: "ecomm-400ca",
    storageBucket: "ecomm-400ca.appspot.com",
    messagingSenderId: "391689007943",
    appId: "1:391689007943:web:d6a74bec69993d56ed5262"
};


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
export default fireDb;