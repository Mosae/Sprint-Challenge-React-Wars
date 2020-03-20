import React from 'react';

const StarCard = ({ data, height, mass }) => {
	const person = data;
	const starHeight = height;
	const starMass = mass;

	console.log(starHeight);

	return (
		<div className="character">
			Name: {person} Height: {starHeight} m, Mass: {starMass}
		</div>
	);
};
export default StarCard;
