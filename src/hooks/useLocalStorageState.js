import { useEffect, useState } from "react";

const useLocalStorageState = (initialState, store) => {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(store);
		return storedValue ? JSON.parse(storedValue) : initialState;
	});
	useEffect(() => {
		localStorage.setItem(store, JSON.stringify(value));
	}, [store, value]);

	return [value, setValue];
};

export { useLocalStorageState };
