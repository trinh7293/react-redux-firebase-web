import database from "../config/firebase";
import {
	FETCH_TODOS
} from "./types";

const todosRef = database.collection('todosRef')

export const addToDo = newToDo => async dispatch => {
	todosRef.add(newToDo)
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
};

export const completeToDo = completeToDoId => async dispatch => {
	todosRef.doc(completeToDoId).delete().then(function() {
		console.log("Document successfully deleted!");
	}).catch(function(error) {
		console.error("Error removing document: ", error);
	});
};

export const fetchToDos = () => async dispatch => {
	let resultObj = {}
	todosRef.get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				resultObj = {
					...resultObj,
					[doc.id]: {
						...doc.data()
					}
				}
			});
			// console.log('resultArr', resultArr)
			dispatch({
				type: FETCH_TODOS,
				payload: resultObj
			});
			// snapshot.forEach((doc) => {
			// 	console.log(doc.id, '=>', doc.data());
			// });
		})
		.catch((err) => {
			console.log('Error getting documents', err);
		});


	// todosRef.on("value", snapshot => {
	// 	dispatch({
	// 		type: FETCH_TODOS,
	// 		payload: snapshot.val()
	// 	});
	// });
};