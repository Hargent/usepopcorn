import PropTypes from "prop-types";
import { useRef } from "react";
import { useKey } from "../../hooks/useKey";

const SearchBar = ({ query, handleSetQuery }) => {
	// const [query, setQuery] = useState("");
	const inputRef = useRef(null);
	useKey("Enter", e => {
		if (document.activeElement === inputRef.current) return;
		inputRef.current.focus();
		handleSetQuery("");
	});
	// useEffect(() => {
	// 	const callBack = e => {
	// 		if (document.activeElement === inputRef.current) return;
	// 		if (e.code === "Enter") inputRef.current.focus();
	// 		handleSetQuery("");
	// 	};
	// 	inputRef.current.focus();
	// 	document.addEventListener("keydown", callBack);
	// 	return () => {
	// 		document.removeEventListener("keydown", callBack);
	// 	};
	// }, [handleSetQuery]);
	return (
		<input
			ref={inputRef}
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={handleSetQuery}
		/>
	);
};
SearchBar.propTypes = {
	query: PropTypes.string,
	handleSetQuery: PropTypes.func
};

export default SearchBar;
