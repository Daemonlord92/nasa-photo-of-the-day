import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import './MoonCard.css'


const MoonCard = ({title, description, image, date }) => {

	

	return (
		<div>
			<Card style={{opicity:'0.5'}}>
        <CardImgOverlay>			
					<CardTitle style={{color:'white'}}>Title: {title}</CardTitle>
					<CardText style={{color:'white'}}>Date: {date}</CardText>
					
					<CardText style={{color:'white'}}>{description}</CardText>
				</CardImgOverlay>
				<CardImg src={image} style={{ margin:'0 auto' }} />
			</Card>
		</div>	
	)
}

export default MoonCard;