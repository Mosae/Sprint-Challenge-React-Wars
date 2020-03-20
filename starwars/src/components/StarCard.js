import React from 'react';

const StarCard = ({ data }) => {
	const person = data;
	console.log(person);

	return <div className="character">Name: {person}</div>;
};
export default StarCard;
