import React, { useEffect, useState } from 'react';
import './MoonCard.css'


const MoonCard = ({title, description, image, date }) => {

	

	return (
		<div>
			<div>
				<h1>Title: {title}</h1>
				<p>Date: {date}</p>
				<img src={image} />
				<p>{description}</p>
			</div>
		</div>	
	)
}

export default MoonCard;