import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../ContextAPI/GlobalContext";

function EditPage(props) {
	const hist = useHistory();
	const [input, setInput] = useState("");
	const { task, editingTask } = useContext(GlobalContext)

	const [presentTask, setPresentTask] = useState({
		id: "",
		task: ""
	})

	const presentID = props.match.params.id;

	useEffect(() => {
		const taskID = presentID
		const presentTask = task.find((name) => task.id === taskID);
		setPresentTask(presentTask);

	}, [presentID, task]);
	return (
		<div>
			<Header />
			<center>
				<h1>Editing Page</h1>

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
								onClick={hist.push("/usecase")}
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
								Edit
							</button>
							<button
								onClick={() => {
									hist.push("/usecase")
									// deleteTask(id)
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
								Cancel
							</button>
						</div>
					</div>
				</div>
			</center>
		</div>
	);
}

export default EditPage;
