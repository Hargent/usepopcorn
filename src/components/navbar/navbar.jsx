import Logo from "../logo/logo";
import PropTypes from "prop-types";

// import { useState } from "react";

// import React from "react";

const Navbar = ({ children }) => {
	return (
		<nav className="nav-bar">
			<Logo />
			{children}
		</nav>
	);
};

Navbar.propTypes = {
	children: PropTypes.node
};

export default Navbar;
