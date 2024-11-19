//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6cUJZueSFHy0JV4zthVXW7JVWVakkH5w",
  authDomain: "marine-conservation-ad199.firebaseapp.com",
  projectId: "marine-conservation-ad199",
  storageBucket: "marine-conservation-ad199.firebasestorage.app",
  messagingSenderId: "897400796721",
  appId: "1:897400796721:web:21b7c3010b2afd2440c710",
  measurementId: "G-0PZF44782Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign up user
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// Sign in existing user
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); 

//Get user data
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//for database rules
/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
