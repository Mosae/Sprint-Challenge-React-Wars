import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarCard from './StarCard';

export default function PhotoDisplay() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then(response => {
				setData(response.data.results);
			})
			.catch(error => {
				console.log('data was not returned', error);
			});
	}, []);

	if (data.length === 0) {
		return <h1 style={{ color: 'red' }}>Loading...</h1>;
	} else {
		return data.map(data => {
			return (
				<StarCard data={data.name} height={data.height} mass={data.mass} />
			);
		});
	}
}
