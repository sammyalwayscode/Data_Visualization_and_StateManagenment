import React, { useState, useContext } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextAPI/GlobalContext";

function UseCase() {
	const { task, deleteTask } = useContext(GlobalContext);
	const [input, setInput] = useState("");
	return (
		<center>
			<Header />
			<div
				style={{
					marginTop: "20px",
					diaplay: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "center",
					height: "400px",
				}}>
				{task.map(({ id, name }) => (
					<div
						style={{
							display: "flex",
							height: "60px",
							width: "50%",
							flexDirection: "row",
							justifyContent: "space-around",
							outline: "1px solid gray",
							alignItems: "center",
							marginTop: "5px",
						}}>
						{/* <input
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
                        /> */}
						<div
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
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "row",
								height: "100%",
								alignItems: "center",
							}}>
							<button
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
								<Link
									to={`/task ${id}`}
									// to="/"
									style={{ textDecoration: "none", color: "white" }}>
									Edit
								</Link>
							</button>
							<button
								onClick={() => {
									deleteTask(id);
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
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</center>
	);
}

export default UseCase;
