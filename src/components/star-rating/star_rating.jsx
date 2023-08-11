import "./star_rating.css";

import PropTypes from "prop-types";
import Star from "./star/star";
import { useState } from "react";

// import React from "react";

const StarRating = ({
	maxRating = 5,
	color = "#fcc419",
	size = 48,
	className = "",
	messages = [],
	defaultRating = 0,
	onSetRating
}) => {
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	const handleRating = rating => {
		setRating(rating);
		onSetRating(rating);
	};
	const handleMouseEnter = value => {
		setTempRating(value);
	};
	const handleMouseLeave = value => {
		setTempRating(value);
	};
	const textStyle = {
		color: color,
		fontSize: `${size / 1.5}px`
	};

	return (
		<div className="rating__container">
			<div className="rating__stars">
				{Array.from({ length: maxRating }, (_, index) => {
					return (
						<Star
							size={size}
							color={color}
							customClass={className}
							key={index + 1}
							onRate={() => handleRating(index + 1)}
							full={
								index + 1 <=
								(tempRating !== 0 ? tempRating : rating)
									? true
									: false
							}
							onHover={() => handleMouseEnter(index + 1)}
							onExit={() => handleMouseLeave(0)}
						/>
					);
				})}
			</div>
			<p className="rating__rate" style={textStyle}>
				{messages.length === maxRating
					? messages[tempRating !== 0 ? tempRating - 1 : rating - 1]
					: tempRating || rating || ""}
			</p>
		</div>
	);
};
StarRating.propTypes = {
	maxRating: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	messages: PropTypes.arrayOf(String),
	defaultRating: PropTypes.number,
	onSetRating: PropTypes.func
};

export default StarRating;
