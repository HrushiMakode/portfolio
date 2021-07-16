import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<span
			style={{
				fontWeight: "lighter",
				color: "#8a2be2",
			}}
		>
			<Typewriter
				options={{
					strings: [
						"Software Developer",
						"Competitive Programmer",
						"MERN Stack Developer",
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 50,
				}}
			/>
		</span>
	);
}

export default Type;
