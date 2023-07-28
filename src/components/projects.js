import React, { useEffect } from 'react';

export const Projects = () => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {

			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate__animated', 'animate__fadeInUp');
				}
			});
		});
		observer.observe(document.querySelector('.projects'));

		return () => {
			<div>...</div>;
		};
	}, []);

	return (
		<div className='animate__animated animate__fadeInUp'>
			<div className='projects'>
				<h2>Projects</h2>
				<div className='project'>
					<div className='project-image'>
						<img
							src={require('../assets/BoatBetter.png')}
							alt='boat better screenshot'
							href='https://boat-better.netlify.app/'
							target='_blank'
						/>
					</div>
					<div className='information'>
						<a
							href='https://boat-better.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<h4>
								Boat Better <span className='arrow'>↗</span>
							</h4>
						</a>
						<p>
						This application utilizes the Stormglass.io API to display weather information on the provided Latitude and Longitude. It can display the weather for 7 days, or for each hour on one of the 7 days.
						</p>
						<div class='tech'>
							<h5 class='stacks'>React</h5>
							<h5 class='stacks'>HTML</h5>
							<h5 class='stacks'>CSS</h5>
							<h5 class='stacks'>API</h5>
						</div>
					</div>
				</div>
				<div className='project'>
					<div className='project-image'>
						<img
							src={require('../assets/SimonGame.png')}
							alt='boat better screenshot'
							href='https://boat-better.netlify.app/'
							target='_blank'
						/>
					</div>
					<div className='information'>
						<a
							href='https://boat-better.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<h4>
								Simon Game <span className='arrow'>↗</span>
							</h4>
						</a>
						<p>
							This Simon Game was created to allow the user to play a basic
							color matching game. I am especially proud of this project,
							because I coded all of the javascript myself. This was a project
							that I attempted within several weeks of learning the basics of
							Javascript.
						</p>
						<div class='tech'>
							<h5 class='stacks'>HTML</h5>
							<h5 class='stacks'>CSS</h5>
							<h5 class='stacks' >
								Javascript
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
