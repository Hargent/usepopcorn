import { useState } from "react";

import Box from "../components/box/box";
import ErrorMessage from "../components/error-message/error-message";
import Loader from "../components/loader/loader";
import Main from "../components/main/main";
import MovieDetails from "../components/movie-details/movie-details";
import MoviesList from "../components/movieslist/movieslist";
import Navbar from "../components/navbar/navbar";
import NumResults from "./../components/numResults/numResults";
import SearchBar from "./../components/searchbar/searchbar";
import Summary from "../components/summary/summary";
import WatchedList from "../components/watchedlist/watchedlist";
import { useMovies } from "../hooks/useMovies";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// import { tempWatchedData } from "../data/data";

// eslint-disable-next-line no-unused-vars
const API_KEY = "d9e54d55";

const App = () => {
	// const [watched, setWatched] = useState(() => {
	// 	const stored = localStorage.getItem("watched");
	// 	return JSON.parse(stored);
	// });
	// const [watched, setWatched] = useState([]);
	const [watched, setWatched] = useLocalStorageState([], "watched");
	const [selectedID, setSelectedID] = useState(null);
	const [query, setQuery] = useState("");
	const { movies, error, isLoading } = useMovies(query);

	const handleSetQuery = e => {
		setQuery(e.target.value);
	};
	const handleSetSelected = id => {
		setSelectedID(selectedID => (selectedID === id ? null : id));
	};
	function handleCloseDetails() {
		setSelectedID(null);
	}
	const handleAddWatched = movie => {
		setWatched(watched => [...watched, movie]);

		// localStorage.setItem("watched", JSON.stringify([...watched, movie]));
	};
	const handleDeleteWatched = id => {
		setWatched(movie => movie.filter(mov => mov.imdbID !== id));
	};

	// useEffect(() => {
	// 	const stored = localStorage.getItem("watched");
	// 	console.log(stored);
	// 	setWatched(watched => [...watched, JSON.parse(stored)]);
	// }, []);

	return (
		<>
			<Navbar>
				<SearchBar query={query} handleSetQuery={handleSetQuery} />
				<NumResults movies={movies} />
			</Navbar>
			<Main>
				{/* <ListBox movies={movies} /> */}
				<Box>
					<>
						{/* {error ? (
							<Error />
						) : isLoading ? (
							<Loader />
						) : (
							<MoviesList movies={movies} />
						)} */}
						{isLoading && <Loader />}
						{!isLoading && !error && (
							<MoviesList
								movies={movies}
								handleSetSelected={handleSetSelected}
							/>
						)}
						{error && <ErrorMessage message={error} />}
					</>
				</Box>
				<Box>
					{selectedID ? (
						<MovieDetails
							selectedID={selectedID}
							onCloseMovie={handleCloseDetails}
							onAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (
						<>
							<Summary watched={watched} />
							<WatchedList
								watched={watched}
								onDeleteWatched={handleDeleteWatched}
							/>
						</>
					)}
				</Box>
				{/* <WatchedBox watched={watched} /> */}
			</Main>
		</>
	);
};
export default App;
