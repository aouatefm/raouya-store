import firebase from 'firebase/app'

firebase.initializeApp({
    apiKey: "AIzaSyAcUtjlHUg_T120LWLpjPo2LaENn5WGYTY",
    authDomain: "raouiya-store.firebaseapp.com",
    projectId: "raouiya-store",
    storageBucket: "raouiya-store.appspot.com",
    messagingSenderId: "573274210542",
    appId: "1:573274210542:web:e4e0acfc843cffc2c773ff"
})
console.log(firebase.app().options)