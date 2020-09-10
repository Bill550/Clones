import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4xHhbqjUEQx4QnL0P1nD5QO62h54ot68",
    authDomain: "clone-33515.firebaseapp.com",
    databaseURL: "https://clone-33515.firebaseio.com",
    projectId: "clone-33515",
    storageBucket: "clone-33515.appspot.com",
    messagingSenderId: "756247078211",
    appId: "1:756247078211:web:74159f371c01a18ba97bf6",
    measurementId: "G-PSVYH6TXFZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); // All signIn 

export { db, auth };