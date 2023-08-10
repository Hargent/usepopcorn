import "./star_rating.css";

import PropTypes from "prop-types";
import Star from "./star/star";
import { useState } from "react";

// import React from "react";

const StarRating = ({ maxRating = 5 }) => {
	const [rating, setRating] = useState(0);
	const [tempRating, setTempRating] = useState(0);

	const handleRating = rating => {
		setRating(rating);
	};
	const handleMouseEnter = value => {
		setTempRating(value);
	};
	const handleMouseLeave = value => {
		setTempRating(value);
	};

	return (
		<div className="rating__container">
			<div className="rating__stars">
				{Array.from({ length: maxRating }, (_, index) => {
					return (
						<Star
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
			<p className="rating__rate">{tempRating || rating || ""}</p>
		</div>
	);
};
StarRating.propTypes = {
	maxRating: PropTypes.number
};

export default StarRating;
