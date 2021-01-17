import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
    apiKey: "AIzaSyAcUtjlHUg_T120LWLpjPo2LaENn5WGYTY",
    authDomain: "raouiya-store.firebaseapp.com",
    projectId: "raouiya-store",
    storageBucket: "raouiya-store.appspot.com",
    messagingSenderId: "573274210542",
    appId: "1:573274210542:web:e4e0acfc843cffc2c773ff"
})
console.log(firebase.app().options)

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase