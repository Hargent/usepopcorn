import { useEffect, useState } from "react";
const API_KEY = "d9e54d55";

const useMovies = query => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(
		function () {
			const controller = new AbortController();
			const getData = async () => {
				try {
					setIsLoading(true);
					setError("");
					const response = await fetch(
						`https://www.omdbapi.com/?&apikey=${API_KEY}&s=${query}`,
						{ signal: controller.signal }
					);
					// console.log(response);
					if (!response.ok) {
						throw new Error(
							"Something went wrong while fetching movies data"
						);
					}

					const data = await response.json();

					if (data.Response === "False") {
						throw new Error(data.Error);
					}
					setMovies(data.Search);
					setError("");
				} catch (err) {
					if (err.name !== "AbortError") setError(err.message);
				} finally {
					setIsLoading(false);
				}
			};

			if (query.length < 3) {
				setMovies([]);
				setError("");
				return;
			}

			getData();

			return () => {
				controller.abort();
			};
		},
		[query]
	);

	return { movies, error, isLoading };
};
export { useMovies };
