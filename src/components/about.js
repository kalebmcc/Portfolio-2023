import React, { useEffect } from 'react';
import 'animate.css';

export const About = () => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate__animated', 'animate__fadeInUp');
				}
			});
		});
		observer.observe(document.querySelector('.about'));

		return () => {
			<div>...</div>;
		};
	}, []);

	return (
		<div className='about' id='about'>
			<h2>About</h2>
			<p>
				I previously worked in the field of Audio Engineering from 2014 - 2020,
				and greatly enjoyed my time mixing live shows, televised promos, and
				corporate events. In 2021, I felt it was time for a change, and decided
				to transition to software development.
				<br />
				<br />
				Check out my previous photo/video work&nbsp;
				<a
					href='https://www.kalebmccullough.com/'
					target='_blank'
					rel='noreferrer'>
					here
				</a>
				.
			</p>
		</div>
	);
};
