import firebase from 'firebase//app';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBRnES9c6-ZEdoB375qY9W3p5fQtVyaxYc",
    authDomain: "ecorsc-v1.firebaseapp.com",
    projectId: "ecorsc-v1",
    storageBucket: "ecorsc-v1.appspot.com",
    messagingSenderId: "1018061219977",
    appId: "1:1018061219977:web:39d5af7150a0bab8dabe58",
    measurementId: "G-EVD9MTP6T3"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export default firebase;
