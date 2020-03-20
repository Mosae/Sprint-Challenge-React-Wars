import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarCard from './StarCard';

export default function PhotoDisplay() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then(response => {
				console.log(response.data.results);
				setData(response.data.results);
			})
			.catch(error => {
				console.log('data was not returned', error);
			});
	}, []);

	if (data.length === 0) {
		return <div>Loading...</div>;
	} else {
		return data.map(data => {
			console.log(data);
			return <StarCard data={data.name} />;
		});
	}
}
