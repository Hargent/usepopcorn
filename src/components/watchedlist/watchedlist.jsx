import PropTypes from "prop-types";
import WatchedMovie from "../watchedmovie/watchedmovie";

// import React from "react";

const WatchedList = ({ watched }) => {
	return (
		<ul className="list">
			{watched.map(movie => (
				<WatchedMovie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	);
};

WatchedList.propTypes = {
	watched: PropTypes.arrayOf(Object)
};

export default WatchedList;
