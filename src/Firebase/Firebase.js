import {initializeApp} from 'firebase/app' 
const firebaseConfig = {
  apiKey: "AIzaSyBX5mCNFtwM78NL56PiDKHZ1Dkl6Zc9WHg",
  authDomain: "buildwise-d13a9.firebaseapp.com",
  projectId: "buildwise-d13a9",
  storageBucket: "buildwise-d13a9.firebasestorage.app",
  messagingSenderId: "14203500173",
  appId: "1:14203500173:web:19359953344679847314c4",
  measurementId: "G-54CBBMWDT0",
  databaseURL : "https://buildwise-d13a9-default-rtdb.firebaseio.com",
};
export const app = initializeApp(firebaseConfig);