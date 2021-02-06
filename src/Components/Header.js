import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			style={{
				display: "flex",
				height: "60px",
				flexDirection: "row",
				width: "100%",
				backgroundColor: "navy",
				justifyContent: "space-around",
				alignItems: "center",
			}}>
			<h2
				style={{
					textDecoration: "none",
					fontWeight: "lighter",
					fontFamily: "monospace",
					cursor: "pointer",
					color: "white",

				}}>
				<Link style={{ textDecoration: "none", color: "white", }} to to="/">Home</Link>
			</h2>
			<h2
				style={{
					textDecoration: "none",
					fontWeight: "lighter",
					fontFamily: "monospace",
					cursor: "pointer",
					color: "white",
				}}>
				<Link style={{ textDecoration: "none", color: "white", }} to="/usecase">UseCase</Link>
			</h2>

			<h2
				style={{
					textDecoration: "none",
					fontWeight: "lighter",
					fontFamily: "monospace",
					cursor: "pointer",
					color: "white",
				}}>
				<Link style={{ textDecoration: "none", color: "white", }} to="/graph">GraphClass</Link>
			</h2>
			<button
				style={{
					width: "100px",
					cursor: "pointer",
					fontSize: "bolder",
					color: "red",
					backgroundColor: "white",
					fontSize: "20px",
					height: "36px",
					border: 'none',
				}}>
				<Link style={{
					textDecoration: "none", cursor: "pointer",
					fontSize: "bolder",
				}} to="/task">
					Add Task
                    </Link>

			</button>
		</div>
	);
}

export default Header;
