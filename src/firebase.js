import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmD4nAj6YLk9q_eqE5g2YzJ5V1y1nVaIo",
    authDomain: "drive-clone-95326.firebaseapp.com",
    projectId: "drive-clone-95326",
    storageBucket: "drive-clone-95326.appspot.com",
    messagingSenderId: "1008220152491",
    appId: "1:1008220152491:web:f5c921a1cfb9fe0f040dee"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export {auth, provider, storage, db};