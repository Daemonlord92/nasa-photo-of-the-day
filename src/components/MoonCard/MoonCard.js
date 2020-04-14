import React, { useEffect } from 'react';
import axios from 'axios';

const MoonCard = () => {
	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
			.then(response => {
				console.log(response)

			})
			.catch(error => console.log("DANGER WILL ROBERTSON", error))
	}, [])

	return (
		<div />	
	)
}

export default MoonCard;