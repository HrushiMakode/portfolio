import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<span
			style={{
				fontWeight: "lighter",
				color: "var(--primary)",
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
