// // Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// import {getDatabase} from 'firebase'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyCJ4ZRGsqp-Zb6U7M77Kje2YkfMOOdezgY',
//   authDomain: 'tinytot-learners.firebaseapp.com',
//   projectId: 'tinytot-learners',
//   storageBucket: 'tinytot-learners.appspot.com',
//   messagingSenderId: '998728222949',
//   appId: '1:998728222949:web:8b0642eb4b9441d1b16c0c',
//   measurementId: 'G-K0TM5CVK89',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJ4ZRGsqp-Zb6U7M77Kje2YkfMOOdezgY',
  authDomain: 'tinytot-learners.firebaseapp.com',
  projectId: 'tinytot-learners',
  storageBucket: 'tinytot-learners.appspot.com',
  messagingSenderId: '998728222949',
  appId: '1:998728222949:web:8b0642eb4b9441d1b16c0c',
  measurementId: 'G-K0TM5CVK89',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {app, db};
