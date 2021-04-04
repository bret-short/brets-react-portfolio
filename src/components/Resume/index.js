import React from 'react';

function Resume() {
	return (
		<section className='resume-section'>
			<div className='resume-container'>
				<h1>Resume</h1>
				<p>
					Download My<span> </span>
					<a
						href='https://docs.google.com/document/d/1IMmaSrUrRnRVC4IDbuSOZkHdggbSu0kuul52eoigcHs/edit?usp=sharing'
						target='_blank' rel="noreferrer">
						Résumé
					</a>
				</p>
				<br />

				<h2>Front End Skills</h2>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
                    <li>React</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
                    <li>Materialize</li>
				</ul>
				<br />

				<h2>Back End Skills</h2>
				<ul>
					<li>API's</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB, Mongoose</li>
					<li>REST</li>
				</ul>
			</div>
		</section>
	);
}

export default Resume;