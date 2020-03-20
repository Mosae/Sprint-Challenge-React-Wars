import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoDisplay() {
	const [image, setImage] = useState([]);
	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then(response => {
				console.log(response.data.results);
				setImage(response.data.results);
			})
			.catch(error => {
				console.log('data was not returned', error);
			});
	}, []);

	return <div className="photo"></div>;
}
