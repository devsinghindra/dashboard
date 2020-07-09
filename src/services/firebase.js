// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8rYPRvmeE8nuBIK8fum_BwcxYdD0KVig",
    authDomain: "tourist-bot-hilapp.firebaseapp.com",
    databaseURL: "https://tourist-bot-hilapp.firebaseio.com",
    projectId: "tourist-bot-hilapp",
    storageBucket: "tourist-bot-hilapp.appspot.com",
    messagingSenderId: "903028130242",
    appId: "1:903028130242:web:43780bc4bdf541d95e565b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const cloudDB = firebase.firestore();
const collectionName = "sentFinal";

export default cloudDB;
export { collectionName };