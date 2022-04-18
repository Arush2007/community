import firebase from 'firebase';

  var firebaseConfig = {
  apiKey: "AIzaSyC7jgXLcjKacXlRKne1XkANXPETDVTY6T0",
  authDomain: "project-c-58-61bc6.firebaseapp.com",
  projectId: "project-c-58-61bc6",
  storageBucket: "project-c-58-61bc6.appspot.com",
  messagingSenderId: "103272246431",
  appId: "1:103272246431:web:a0ba384ac55625ddc986aa"
};

// Initialize Firebase

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();