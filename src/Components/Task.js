import React, { useContext } from "react";
import Header from "./Header";
import { GlobalContext } from "../ContextAPI/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import {v4 as uuid} from 'uuid';

function Task() {
	const hist = useHistory()
	const { task, addTask } = useContext(GlobalContext);
	const [input, setInput] = React.useState("");


	const updateList =(e)=>{
		if(input==""){
		alert ("enter a task")
		}
	}

	const addingNewTask = ()=>{

		const newTask ={
			id: uuid(),
			name:  input,
		}
		addTask({id: uuid(), name: input})
	}


	return (
		<div>
			<Header />
			<center>
				<h2>Add a Task</h2>
				{/* <div> */}
				<div
					style={{
						marginTop: "20px",
						diaplay: "flex",
						flexDirection: "row",
						width: "100%",
						justifyContent: "center",
						height: "400px",
					}}>
					<div
						style={{
							display: "flex",
							height: "60px",
							width: "50%",
							flexDirection: "row",
							justifyContent: "space-around",
							outline: "1px solid gray",
							alignItems: "center",
							
							
						}}>
						<input
							value={input}
							type="text"
							onChange={(e) => {
								setInput(e.target.value);
							}}
							placeholder="Enter a task"
							style={{
								height: "40px",
								width: "400px",
								outline: "0.5px",
								backgroundColor: "#fffff",
								// border:"1px",
								fontSize: "20px",
								paddingLeft: "5px",
								fontWeight: "lighter",
								fontFamily: "arial",
							}}
						/>
						{/* <div
							style={{
								height: "40px",
								width: "400px",
								outline: "0.5px",
								backgroundColor: "#fffff",
								// border:"1px",
								fontSize: "20px",
								paddingLeft: "5px",
								fontWeight: "lighter",
								fontFamily: "arial",

								textAlign: "start",
							}}>
							{name}
						</div> */}

						<div
							style={{
								display: "flex",
								flexDirection: "row",
								height: "100%",
								alignItems: "center",
							}}>
							<button
							onClick={()=>{
								updateList()
								if(input!=""){
								addingNewTask()
								hist.push('/usecase')
								}
								
							}}
								style={{
									width: "100px",
									cursor: "pointer",
									fontSize: "bolder",
									color: "white",
									backgroundColor: "green",
									fontSize: "20px",
									height: "36px",
									margin: "3px",
									border: "none",
								}}>
							
									
									ACCEPT
						
							</button>
							<button

							onClick={()=>{
								hist.push("/usecase")
							}}
								style={{
									width: "100px",
									cursor: "pointer",
									fontSize: "bolder",
									color: "white",
									backgroundColor: "red",
									fontSize: "20px",
									height: "36px",
									margin: "3px",
									border: "none",
								}}>
							
									CANCEL
							
							</button>
						</div>
					</div>
				</div>
			</center>
		</div>
	);
}

export default Task;
