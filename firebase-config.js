// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Paste your own Firebase config here:
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "bachon-ki-duniya.firebaseapp.com",
  projectId: "bachon-ki-duniya",
  storageBucket: "bachon-ki-duniya.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };