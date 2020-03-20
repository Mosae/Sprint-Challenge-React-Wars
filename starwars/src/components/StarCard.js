import React from 'react';
import { Alert, Card, CardHeader, Col, Badge } from 'reactstrap';

const StarCard = ({ data, height, mass }) => {
	const person = data;
	const starHeight = height;
	const starMass = mass;

	console.log(starHeight);

	return (
		<Col xs="12" sm="6" md="4" xl="6">
			<Card>
				<CardHeader>
					<h2>
						<Alert color="primary">Name: {person} </Alert>
					</h2>
					<Alert color="secondary">Height: {starHeight} m</Alert>
					<h4>
						<Badge color="warning">Mass: {starMass}</Badge>
					</h4>
				</CardHeader>
			</Card>
		</Col>
	);
};
export default StarCard;
