import PropTypes from "prop-types";
import WatchedMovie from "../watchedmovie/watchedmovie";

// import React from "react";

const WatchedList = ({ watched, onDeleteWatched }) => {
	return (
		<ul className="list">
			{watched.map(movie => (
				<WatchedMovie
					movie={movie}
					key={movie.imdbID}
					onDeleteWatched={onDeleteWatched}
				/>
			))}
		</ul>
	);
};

WatchedList.propTypes = {
	watched: PropTypes.arrayOf(Object),
	onDeleteWatched: PropTypes.func
};

export default WatchedList;
