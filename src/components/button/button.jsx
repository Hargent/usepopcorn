import PropTypes from "prop-types";

// import { useState } from "react";

const Button = ({ isOpen, onClick }) => {
	// const [isOpen, setIsOpen] = useState(true);

	return (
		<button className="btn-toggle" onClick={onClick}>
			{isOpen ? "–" : "+"}
		</button>
	);
};

Button.propTypes = {
	isOpen: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;
