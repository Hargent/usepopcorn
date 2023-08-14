import PropTypes from "prop-types";

// import React from "react";

const WatchedMovie = ({ movie, onDeleteWatched }) => {
	function handleDeleteWatched(id) {
		onDeleteWatched(id);
	}
	return (
		<li key={movie.imdbID}>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating.toFixed(1)}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime.toFixed(2)} min</span>
				</p>
				<button
					onClick={() => handleDeleteWatched(movie.imdbID)}
					className="btn-delete">
					X
				</button>
			</div>
		</li>
	);
};

WatchedMovie.propTypes = {
	movie: PropTypes.object,
	onDeleteWatched: PropTypes.func
};

export default WatchedMovie;
