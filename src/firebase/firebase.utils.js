import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCymrBdwYd5y3z8eVq5O758X46zuE39kHQ",
  authDomain: "crwn-db-bfcff.firebaseapp.com",
  databaseURL: "https://crwn-db-bfcff.firebaseio.com",
  projectId: "crwn-db-bfcff",
  storageBucket: "crwn-db-bfcff.appspot.com",
  messagingSenderId: "479156714689",
  appId: "1:479156714689:web:4512e46da821d1eb34a840",
  measurementId: "G-7WXK0B0XPL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account', })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
