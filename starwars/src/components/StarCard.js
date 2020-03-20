import React from 'react';

const StarCard = ({ data, height }) => {
	const person = data;
	const starHeight = height;

	console.log(starHeight);

	return (
		<div className="character">
			Name: {person} Height: {starHeight} m
		</div>
	);
};
export default StarCard;
