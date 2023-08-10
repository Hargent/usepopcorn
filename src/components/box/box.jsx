import Button from "../button/button";
import PropTypes from "prop-types";
import { useState } from "react";

// import average from "../../utils/average";

const Box = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<Button isOpen={isOpen} onClick={() => setIsOpen(open => !open)} />

			{isOpen && children}
		</div>
	);
};

Box.propTypes = {
	children: PropTypes.node
};

export default Box;
