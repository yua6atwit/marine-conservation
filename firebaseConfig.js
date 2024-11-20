// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
//for database rules
/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
