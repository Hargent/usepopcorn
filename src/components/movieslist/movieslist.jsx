import Movie from "../movie/movie";
import PropTypes from "prop-types";

// import React from "react";

const MoviesList = ({ movies, handleSetSelected }) => {
	// console.log(movies);
	return (
		<ul className="list list-movies">
			{movies?.map(movie => (
				<Movie
					movie={movie}
					key={movie.imdbID}
					handleSetSelected={handleSetSelected}
				/>
			))}
		</ul>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.arrayOf(Object),
	handleSetSelected: PropTypes.func
};

export default MoviesList;
