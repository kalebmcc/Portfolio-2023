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
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<div class='tech'>
							<h5 class='stacks'>React</h5>
							<h5 class='stacks'>HTML</h5>
							<h5 class='stacks'>CSS</h5>
							<h5 class='stacks'>API Call</h5>
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
							<h5 class='stacks' style={{ width: 200 }}>
								Javascript
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
