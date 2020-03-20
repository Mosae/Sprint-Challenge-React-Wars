import React from 'react';
import { Alert, Card, CardHeader, Col, Badge, Row } from 'reactstrap';

const StarCard = ({ data, height, mass }) => {
	const person = data;
	const starHeight = height;
	const starMass = mass;

	return (
		<Row>
			<Col
				md={{ span: 6, offset: 3 }}
				xs="12"
				sm="6"
				style={{ padding: '1rem', align: 'centered' }}>
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
		</Row>
	);
};
export default StarCard;
