import React from "react";
import Header from "./Header";

function Home() {
	const [start, setStart] = React.useState(true);

	const startClick = () => {
		setStart(!start)
		navigator.getUserMedia(
			{ video: true },
			(stream) => {
				let video = document.getElementsByClassName("gameplay")[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.log(err)
		)
	}

	const stopClick = () => {
		setStart(!start)
		let video = document.getElementsByClassName("gameplay")[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div>
			<Header />
			<center style={{ marginTop: "20px" }}>
				<div>the Home page</div>
				<div
					style={{
						height: "300px",
						width: "400px",
						outline: "2px solid gray",
						marginTop: "20px",
					}}>
					<video
						height="100%"
						width="100%"
						muted
						autoPlay
						className="gameplay"
					/>
				</div>
				{start ? (
					<button
						style={{
							width: "100px",
							cursor: "pointer",
							fontSize: "bolder",
							color: "white",
							backgroundColor: "green",
							fontSize: "20px",
							height: "36px",
							marginTop: "20px",
						}}
						onClick={startClick}
					>
						Start
					</button>
				) : (
						<button
							style={{
								width: "100px",
								cursor: "pointer",
								fontSize: "bolder",
								color: "white",
								backgroundColor: "red",
								fontSize: "20px",
								height: "36px",
								marginTop: "20px",
							}}
							onClick={stopClick}
						>
							Stop
						</button>
					)}
			</center>
		</div>
	);
}

export default Home;
