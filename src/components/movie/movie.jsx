import PropTypes from "prop-types";

// import React from "react";

const Movie = ({ movie, handleSetSelected }) => {
	// console.log(movie.imdbID);
	return (
		<li key={movie.imdbID} onClick={() => handleSetSelected(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
};

Movie.propTypes = {
	movie: PropTypes.object,
	handleSetSelected: PropTypes.func
};

export default Movie;
