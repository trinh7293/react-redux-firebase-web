// import * as firebase from "firebase";

// import { FirebaseConfig } from "../config/keys";
// firebase.initializeApp(FirebaseConfig);

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");

const firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");

const FirebaseConfig = {
	apiKey: "AIzaSyA7uVJs0xZNLGQGQ1JgOMB_nX64JQvj9Sg",
	authDomain: "tutorial-frontend.firebaseapp.com",
	databaseURL: "https://tutorial-frontend.firebaseio.com",
	projectId: "manage-work",
};
firebase.initializeApp(FirebaseConfig);
const database = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
database.settings(settings);

export default database