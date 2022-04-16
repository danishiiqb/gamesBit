import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBNR1-66CnsJv_c_-2TVtYC-xurTOh44V8',
  authDomain: 'gamesbit-372e6.firebaseapp.com',
  projectId: 'gamesbit-372e6',
  storageBucket: 'gamesbit-372e6.appspot.com',
  messagingSenderId: '296975012186',
  appId: '1:296975012186:web:64c619f2bd1a2138bbe363',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { auth, db };
