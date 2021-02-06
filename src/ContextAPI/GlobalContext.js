import React, { useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";
import { AppReducer } from "../Components/AppReducer";

const initialState = {
	tasks: [
		{ id: uuid(), name: "Cook When I Get Home" },
		{ id: uuid(), name: "Play Some Notes On The Keyboard" },
		{ id: uuid(), name: "Write Some Codes" },
		{ id: uuid(), name: "Work On Some New Projects" },
		{ id: uuid(), name: "Post Them To FaceBook" },
		{ id: uuid(), name: "Have Some Good Sleep" },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);


	//code for adding task to the database

	const addTask = (task) => {
		dispatch({
			type: 'ADD_TASK',
			payload: task
		})
	}

	//code for deleting task frm the database

	const deleteTask = (id) => {
		dispatch({
			type: "DELETING_TASK",
			payload: id,
		})
	}

	// code for editing task

	const editingTask = (task) => {
		dispatch({
			type: "EDITING_TASK",
			payload: task,
		})
	}

	return <GlobalContext.Provider
		value={{
			task: state.tasks,
			addTask,
			deleteTask,
			editingTask,
		}}
	>{children}</GlobalContext.Provider>;
};
