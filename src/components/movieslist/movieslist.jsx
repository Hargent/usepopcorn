import Movie from "../movie/movie";
import PropTypes from "prop-types";

// import React from "react";

const MoviesList = ({ movies }) => {
	console.log(movies);
	return (
		<ul className="list">
			{movies?.map(movie => (
				<Movie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.arrayOf(Object)
};

export default MoviesList;
