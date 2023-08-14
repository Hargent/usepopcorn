import PropTypes from "prop-types";

// import React from "react";

const Error = ({ message }) => {
	console.log(message);
	return (
		<div className="error">
			<span>⛔ </span>
			<p> {message}</p>
		</div>
	);
};

Error.propTypes = {
	message: PropTypes.string
};

export default Error;
