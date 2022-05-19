import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import { Light } from "./light.js";

//create your first component
export function Home() {
	const colors = ["red", "yellow", "green"];
	const [glow, setGlow] = useState("red");

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<h1>Semáforo</h1>
			<div className="mt-3 trafficLight d-flex flex-column justify-content-around align-items-center rounded">
				{colors.map((color, index) => {
					return (
						<Light
							key={index}
							color={color}
							glow={glow}
							setGlow={setGlow}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
