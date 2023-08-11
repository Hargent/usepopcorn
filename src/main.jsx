// import "./index.css";

import App from "./app/app.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/star-rating/star_rating";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating="10" /> */}
	</React.StrictMode>
);
