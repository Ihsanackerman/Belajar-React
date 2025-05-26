// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxx0skQX-8r6BYJIF0Hki6lxWw3EWkDZw",
  authDomain: "pelatihan-sintak-a403c.firebaseapp.com",
  projectId: "pelatihan-sintak-a403c",
  storageBucket: "pelatihan-sintak-a403c.firebasestorage.app",
  messagingSenderId: "749609916295",
  appId: "1:749609916295:web:3a866b8d7da54d5a496522",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
