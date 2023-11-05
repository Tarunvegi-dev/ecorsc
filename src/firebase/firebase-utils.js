import firebase from 'firebase//app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDwgAmQhBtpj55a4E7jHIjWMzOaBTDS_ko",
    authDomain: "ecorsc-900ec.firebaseapp.com",
    projectId: "ecorsc-900ec",
    storageBucket: "ecorsc-900ec.appspot.com",
    messagingSenderId: "710006303721",
    appId: "1:710006303721:web:1bf95cbc0114ba5c73b978",
    measurementId: "G-50030ZJPNK"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export const auth = firebase.auth();
export const signOut = () => auth.signOut();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
