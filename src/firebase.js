import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Corrected import

const firebaseConfig = {
  apiKey: "AIzaSyDk4tPPrDmf89nhY207d4Sb1uTjf6fFOqI",
  authDomain: "fooliz-9b2de.firebaseapp.com",
  projectId: "fooliz-9b2de",
  storageBucket: "fooliz-9b2de.firebasestorage.app",
  messagingSenderId: "589853889129",
  appId: "1:589853889129:web:33d89888c6cd12713bc8f8",
  measurementId: "G-051BHDGER2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Changed variable name to 'db' to match our component

// Export the Firestore instance
export { db };