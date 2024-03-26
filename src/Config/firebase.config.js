// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJxwrDhFGE2Q9rGSDETcHARr6ifnjMVPg',
  authDomain: 'chatapp-6e677.firebaseapp.com',
  projectId: 'chatapp-6e677',
  storageBucket: 'chatapp-6e677.appspot.com',
  messagingSenderId: '206879649557',
  appId: '1:206879649557:web:8f740e2661a3da7053431c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
