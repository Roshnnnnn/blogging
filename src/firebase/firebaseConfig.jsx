import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS7MUhJNGDJ9hthwT2ZPB2F8BadTclLXI",
  authDomain: "blogging-b6e33.firebaseapp.com",
  projectId: "blogging-b6e33",
  storageBucket: "blogging-b6e33.appspot.com",
  messagingSenderId: "592598128545",
  appId: "1:592598128545:web:1f62db4d5b6c402ce31de0",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDB, auth, storage };
