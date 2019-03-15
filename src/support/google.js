import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDNIGLmoD69L3UYmh2M-y7BlHLlXOOH0ZA",
    authDomain: "new-project-16c5d.firebaseapp.com",
    databaseURL: "https://new-project-16c5d.firebaseio.com",
    projectId: "new-project-16c5d",
    storageBucket: "new-project-16c5d.appspot.com",
    messagingSenderId: "241333700311"
  };

  firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const auth = firebase.auth;
  export const provider = new firebase.auth.GoogleAuthProvider;