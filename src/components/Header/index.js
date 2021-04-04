import React from 'react';

function Header() {
	return (
		<section
			id='home'
			className='cover-photo'
			alt='cover photo of galaxy'>
			<div className='cover-text-box'>
				<h1>
					Hi, I'm Bret.
					<br />
					Welcome to my portfolio.
				</h1>
				<a className='btn' href='#about'>
					About Me
				</a>
			</div>
		</section>
	);
}

export default Header;