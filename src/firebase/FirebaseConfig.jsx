import {getAuth} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
import {getStorage} from '@firebase/storage';
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "edukan-b90d3.firebaseapp.com",
  projectId: "edukan-b90d3",
  storageBucket: "edukan-b90d3.appspot.com",
  messagingSenderId: "772007189852",
  appId: "1:772007189852:web:6460399b7b2bc263e3b599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireDB = getFirestore(app);
export const storage = getStorage(app);

export default app;