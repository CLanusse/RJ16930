import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDarfqfNjCvfaDzdtlkwZMgU6IVaYaBuWA",
    authDomain: "coder-js-16930.firebaseapp.com",
    projectId: "coder-js-16930",
    storageBucket: "coder-js-16930.appspot.com",
    messagingSenderId: "1051528715561",
    appId: "1:1051528715561:web:5779ba28da4fd74c066b38"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}