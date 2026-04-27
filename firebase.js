// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


     const firebaseConfig = {
  apiKey: "AIzaSyAKDct_AamhPAuonkwef6utDC51ZudjMkc",
  authDomain: "ishinomori-archive.firebaseapp.com",
  projectId: "ishinomori-archive",
  storageBucket: "ishinomori-archive.firebasestorage.app",
  messagingSenderId: "288552098418",
  appId: "1:288552098418:web:277d01f180e22fee9500eb",
  measurementId: "G-7BLYHR8CJF"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };