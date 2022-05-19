import React, { useState } from "react";

export const TraficLight = () => {
	let [state, setState] = useState({
		red: "redLight",
		yellow: "yellowLight",
		green: "greenLight",
	});

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="container mt-4">
				<div
					className={state.red}
					onClick={() =>
						setState({
							red: "redLightSelected",
							yellow: "yellowLight",
							green: "greenLight",
						})
					}
				/>
				<div
					className={state.yellow}
					onClick={() =>
						setState({
							red: "redLight",
							yellow: "yellowLightSelected",
							green: "greenLight",
						})
					}
				/>
				<div
					className={state.green}
					onClick={() =>
						setState({
							red: "redLight",
							yellow: "yellowLight",
							green: "greenLightSelected",
						})
					}
				/>
			</div>
		</div>
	);
};
