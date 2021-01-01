import firebase from 'firebase/app'

firebase.initializeApp({
    apiKey: "AIzaSyAcUtjlHUg_T120LWLpjPo2LaENn5WGYTY",
    authDomain: "raouiya-store.firebaseapp.com",
    projectId: "raouiya-store",
    storageBucket: "raouiya-store.appspot.com",
    messagingSenderId: "573274210542",
    appId: "1:573274210542:web:e4e0acfc843cffc2c773ff"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MASSAGING_SENDER_ID,
})
console.log(firebase.app().options)