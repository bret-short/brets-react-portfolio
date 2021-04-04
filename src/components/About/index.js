import React from 'react';
import headshot from '../../assets/images/headshot.jpg';

function About() {
	return (
		<section id='about'>
			<h2 className='section-title'>About Me</h2>
			<img
				src={headshot}
				alt='Headshot'
				className='headshot'
			/>
			<h4 className='section-text'>
				Full Stack Web Developer with over 10 years of
				sales and customer service experience.
				<br />
				Experienced in delivering custom JavaScript,
				HTML, CSS and React requests for client projects.
				<br />
				Knowledgeable about communicating with customers about questions concerns.
                Problem-solver and expert critical thinker. 
			</h4>
		</section>
	);
}

export default About;