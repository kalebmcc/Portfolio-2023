import React, { useEffect } from 'react';

export const Experiences = () => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate__animated', 'animate__fadeInUp');
				}
			});
		});
		observer.observe(document.querySelector('.experiences'));

		return () => {
			<div>...</div>;
		};
	}, []);

	return (
		<div className='experiences' id='experiences'>
			<h2>Experiences</h2>
			<div className='experience'>
				<div className='date'>
					<p>2022 - PRESENT</p>
				</div>
				<div className='information'>
					<h3>
						<a href='https://moosylvania.com/' target='_blank' rel='noreferrer'>
							Moosylvania
						</a>
					</h3>

					<h4>Junior Developer</h4>
					<p>
						Implementing interactive sites for nationally recognized brands who
						partnered with this advertising agency. I would assist in deploying
						landing pages for sweepstakes, games, and interactive quizzes to
						incentivize traffic to their sites.
						<br />
						<br />
						Creating custom coded emails for lists that were designed for
						distribution on all devices/browsers as well as dark mode
						compatibility.
					</p>
					<div class='tech'>
						<h5 class='stacks'>PHP</h5>
						<h5 class='stacks'>Vue</h5>
						<h5 class='stacks'>Heroku</h5>
						<h5 class='stacks'>SASS</h5>
					</div>
				</div>
			</div>
			<div className='experience'>
				<div className='date'>
					<p>8/2021-11/2021</p>
				</div>
				<div className='information'>
					<h3>
						<a
							href='https://generalassemb.ly/education/software-engineering-immersive'
							target='_blank'
							rel='noreferrer'>
							General Assembly
						</a>
					</h3>

					<h4>Software Engineering Immersive Student</h4>
					<p>
						Created many applications using multiple languages and libraries
						such React and Node.
						<br />
						<br />
						Learned to utilize React, Django, Node.js, and other fundamentals
						including Javascript and Git in an extensive full-time program.
					</p>
					<div class='tech'>
						<h5 class='stacks'>React</h5>
						<h5 class='stacks'>Git</h5>
						<h5 class='stacks'>Django</h5>
						<h5 class='stacks'>Node.js</h5>
					</div>
				</div>
			</div>
			<a className='resume-link' href="https://drive.google.com/file/d/1yqOt7r6M9jYckkEXjUVOGJ2J-YGyHJxC/view?usp=sharing" target="_blank" rel="noreferrer"><h3 className='resume'>View Full Resume</h3></a>
		</div>
	);
};
