import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="semaforo">
			<div
				onClick={() => setColor("red")}
				className={
					"luz roja" + (color === "red" ? " prende" : "")
				}></div>
			<div
				onClick={() => setColor("yellow")}
				className={
					"luz amarilla" + (color === "yellow" ? " prende" : "")
				}></div>
			<div
				onClick={() => setColor("green")}
				className={
					"luz verde" + (color === "green" ? " prende" : "")
				}></div>
		</div>
	);
};

export default Home;
