import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHBbH5c3mhHBfzU4izlgjvRM_aVWAAjAU",
    authDomain: "netflix-clone-10fd7.firebaseapp.com",
    projectId: "netflix-clone-10fd7",
    storageBucket: "netflix-clone-10fd7.appspot.com",
    messagingSenderId: "255566182673",
    appId: "1:255566182673:web:69717acf31cfb4d26034b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;