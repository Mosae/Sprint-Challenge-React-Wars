import React from 'react';
import { Alert } from 'reactstrap';

const StarCard = ({ data, height, mass }) => {
	const person = data;
	const starHeight = height;
	const starMass = mass;

	console.log(starHeight);

	return (
		<div className="character">
			<Alert color="primary">Name: {person} </Alert>
			<Alert color="secondary">Height: {starHeight} m</Alert>
			<Alert color="info">Mass: {starMass} m</Alert>
		</div>
	);
};
export default StarCard;
