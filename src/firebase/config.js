import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCimBDsErvavvZx4efpeeWB18MldcVmeyw",
  authDomain: "tienda-react-coder-16930.firebaseapp.com",
  projectId: "tienda-react-coder-16930",
  storageBucket: "tienda-react-coder-16930.appspot.com",
  messagingSenderId: "125602386588",
  appId: "1:125602386588:web:a4153ce086dd3552b3d359",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore();
}
