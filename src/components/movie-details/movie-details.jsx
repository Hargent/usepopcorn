import { useEffect, useRef, useState } from "react";

import ErrorMessage from "../error-message/error-message";
import Loader from "../loader/loader";
import PropTypes from "prop-types";
import StarRating from "../star-rating/star_rating";
import { useKey } from "../../hooks/useKey";

const API_KEY = "d9e54d55";
const MovieDetails = ({ selectedID, onCloseMovie, onAddWatched, watched }) => {
	const [movieDetail, setMovieDetail] = useState({});
	const [isLoading, setIsLoading] = useState(null);
	const [error, setError] = useState(null);
	const [userRating, setUserRating] = useState(0);
	const detailsRef = useRef([]);
	useEffect(() => {
		if (userRating)
			detailsRef.current = [...detailsRef.current, userRating];

		// console.log(detailsRef.current);
	}, [userRating]);
	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre
	} = movieDetail;
	useEffect(() => {
		// console.log(selectedID);
		const getData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
				);
				// console.log(response);
				if (!response.ok) {
					throw new Error(
						"Something went wrong while fetching movies data"
					);
				}

				const data = await response.json();
				// console.log(data);

				if (data.Response === "False") {
					throw new Error(data.Error);
				}
				setMovieDetail(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, [selectedID]);

	const handleAddWatchedMovie = () => {
		const newWatchedMovie = {
			title,
			year,
			poster,
			runtime: Number(runtime.split(" ").at(0)),
			imdbID: selectedID,
			imdbRating: Number(imdbRating),
			userRating: userRating,
			countRatingDecisions: detailsRef.current
		};

		onAddWatched(newWatchedMovie);
		onCloseMovie();
	};
	// useEffect(()=>{
	// 	pageTitle;
	// })
	useEffect(() => {
		if (!title) return;
		document.title = `Movie | ${title}`;

		return () => {
			document.title = "usepopcorn";
		};
	}, [title]);
	useKey("escape", onCloseMovie);
	// useEffect(() => {
	// 	const callBack = e => {
	// 		if (e.code === "Escape") {
	// 			console.log("escaping");
	// 			onCloseMovie();
	// 		}
	// 	};
	// 	document.addEventListener("keydown", callBack);

	// 	return () => {
	// 		document.removeEventListener("keydown", callBack);
	// 	};
	// }, [onCloseMovie]);
	return (
		<div className="details">
			{isLoading && <Loader />}
			{!isLoading && !error && (
				<>
					<header>
						<button className="btn-back" onClick={onCloseMovie}>
							&larr;
						</button>
						<img
							src={poster}
							alt={`Poster of the ${title} movie`}
						/>
						<div className="details-overview">
							<h2>{title}</h2>

							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐️</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						{watched.filter(movie => movie.imdbID === selectedID)
							.length === 0 ? (
							<div className="rating">
								<StarRating
									maxRating={10}
									size={24}
									onSetRating={setUserRating}
								/>
								{userRating > 0 && (
									<button
										className="btn-add"
										onClick={handleAddWatchedMovie}
										disabled={userRating === 0}>
										⌚ Add to list
									</button>
								)}
							</div>
						) : (
							<p>{`You rated this movie ${
								watched.find(
									movie => movie.imdbID === selectedID
								)?.userRating
							}🌟`}</p>
						)}
						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>
							Directed by {director}{" "}
							<span>
								&copy; <span>{year}</span>
							</span>
						</p>
					</section>
				</>
			)}
			{error && <ErrorMessage message={error} />}
		</div>
	);
};

MovieDetails.propTypes = {
	selectedID: PropTypes.string,
	onCloseMovie: PropTypes.func,
	onAddWatched: PropTypes.func,
	watched: PropTypes.arrayOf(Object)
};

export default MovieDetails;
