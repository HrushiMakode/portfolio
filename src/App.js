import React, { useState, useEffect } from "react";

import { Home, Loading } from "./components";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2500);
	}, []);

	return loading ? <Loading /> : <Home />;
};

export default App;
