import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9sKQNULBgzXIIfKW9C5teAgkH-3jtj2g",
    authDomain: "crwn-db-9f17f.firebaseapp.com",
    databaseURL: "https://crwn-db-9f17f.firebaseio.com",
    projectId: "crwn-db-9f17f",
    storageBucket: "crwn-db-9f17f.appspot.com",
    messagingSenderId: "762720812372",
    appId: "1:762720812372:web:0362053d3110fcf090dcc1"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;