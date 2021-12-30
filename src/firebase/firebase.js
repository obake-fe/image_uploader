// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// use env file
// eslint-disable-next-line @typescript-eslint/no-var-requires
// require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrKZJkvEzQbkEcGcUCJBq1gTj1ie8u8Wg',
  authDomain: 'image-uploader-9e187.firebaseapp.com',
  projectId: 'image-uploader-9e187',
  storageBucket: 'image-uploader-9e187.appspot.com',
  messagingSenderId: '217533981530',
  appId: '1:217533981530:web:6ac571f2d5489b7a01c963'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
