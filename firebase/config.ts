import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAckzGya30BxgDUOsBukicFYu5t2oDolDE",
  authDomain: "ahandymaninnewcastle.firebaseapp.com",
  projectId: "ahandymaninnewcastle",
  storageBucket: "ahandymaninnewcastle.appspot.com",
  messagingSenderId: "385483101858",
  appId: "1:385483101858:web:c3c82da79df24e959f29fb"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;