import React from 'react'
import { Button } from './Button';
import './AboutMe.css';
import '../App.css';
import nelson from '../assets/images/nelson.png'
function AboutMe(){
	return(
		<div className='AboutMe-container'>
			
			
			<h1>Hi, I'm Nelson</h1>
			<p> I am a software engineer</p>
			
			{/*insert picture here*/}
			<br></br>
			<br></br>
			<br></br>

			<div className='text-box'>
			<h1>About me </h1>
		
			<p className="text">
			I am a recent graduate with bachlors in Computer Science and minor in Mathematics located in New York City.
			My goal is to improve the quality of life using my software enginnering skills. I am most familiar with C++ and 
			I have been expanding my programming language knowledge during this pandemic. On my free time when I'm not coding, 
			I like to explore the outdoor and exercise.
			</p>
			<p className="bullet"> 
			Here are some of the technologies I am working with: 
			<ul class='list'>
				<li> React </li>
				<li>React Native</li>
				<li>UNIX commands </li>
				<li>NoSQL</li>
				<li>Restful APIs</li>
			</ul>
			</p>


			</div>


			
				{/* 
				<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Projects </Button>
				*/}
			

				

			</div>
		)
}

export default AboutMe
