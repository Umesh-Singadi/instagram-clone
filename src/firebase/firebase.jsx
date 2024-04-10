import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhbio6qztYDYxVCJby3zyFSh41QvBYnN8",
  authDomain: "insta-clone-868a7.firebaseapp.com",
  projectId: "insta-clone-868a7",
  storageBucket: "insta-clone-868a7.appspot.com",
  messagingSenderId: "147744002001",
  appId: "1:147744002001:web:fffd5f58a6511229bddaf0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage, app };
