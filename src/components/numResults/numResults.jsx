import PropTypes from "prop-types";

// import React from "react";

const NumResults = ({ movies }) => {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
	);
};

NumResults.propTypes = {
	movies: PropTypes.arrayOf(Object)
};

export default NumResults;
