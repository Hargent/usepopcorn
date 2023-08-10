import { tempMovieData, tempWatchedData } from "../data/data";

import Box from "../components/box/box";
import Main from "../components/main/main";
import MoviesList from "../components/movieslist/movieslist";
import Navbar from "../components/navbar/navbar";
import NumResults from "./../components/numResults/numResults";
import SearchBar from "./../components/searchbar/searchbar";
import Summary from "../components/summary/summary";
import WatchedList from "../components/watchedlist/watchedlist";
import { useState } from "react";

const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [movies, setMovies] = useState(tempMovieData);
	// eslint-disable-next-line no-unused-vars
	const [watched, setWatched] = useState(tempWatchedData);

	return (
		<>
			<Navbar>
				<SearchBar />
				<NumResults movies={movies} />
			</Navbar>
			<Main>
				{/* <ListBox movies={movies} /> */}
				<Box>
					<>
						<MoviesList movies={movies} />
					</>
				</Box>
				<Box>
					<>
						<Summary watched={watched} />
						<WatchedList watched={watched} />
					</>
				</Box>
				{/* <WatchedBox watched={watched} /> */}
			</Main>
		</>
	);
};
export default App;
