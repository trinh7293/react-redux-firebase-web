var firebase = require("firebase/app");
require("firebase/firestore");

const FirebaseConfig = {
  apiKey: "AIzaSyA7uVJs0xZNLGQGQ1JgOMB_nX64JQvj9Sg",
  authDomain: "tutorial-frontend.firebaseapp.com",
  databaseURL: "https://tutorial-frontend.firebaseio.com"
};
firebase.initializeApp(FirebaseConfig);
console.log('firebase', firebase)
// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");
