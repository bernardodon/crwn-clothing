import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGjLpDbCbjLFkWAFxEE6a2GYDdKr75p_k",
    authDomain: "crwn-db-501da.firebaseapp.com",
    databaseURL: "https://crwn-db-501da.firebaseio.com",
    projectId: "crwn-db-501da",
    storageBucket: "crwn-db-501da.appspot.com",
    messagingSenderId: "281959700762",
    appId: "1:281959700762:web:7c86da5a599eb3eac474a3",
    measurementId: "G-S91E20M46S"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;