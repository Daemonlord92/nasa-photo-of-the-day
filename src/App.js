import React, { useState, useEffect } from "react";
import { Jumbotron } from 'reactstrap';
import "./App.css";

import axios from 'axios';

import MoonCard from './components/MoonCard/MoonCard.js';

function App() {

	const [pic, setPic] = useState('')

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
			.then(response => {
				console.log(response.data)
				setPic(response.data)
			})
			.catch(error => console.log("Error", error))
	}, [])


  return (
    <div className="App">
      <Jumbotron style={{margin: '0 auto', padding:'15px' }}>
    	  <h1 className='web-title'>NASA Astro picture of the day!</h1>
      </Jumbotron>
      <MoonCard
      	title={pic.title}
      	description={pic.explanation}
      	image={pic.hdurl}
      	date={pic.date}
      	/>
    </div>
  );
}

export default App;
