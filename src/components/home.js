import React, { useEffect } from 'react';
import 'animate.css';
import TypeIt from 'typeit-react';

const Home = () => {
	return (
		<div className='home'>
			<div className='animate__animated animate__fadeInLeft'>
				<img
					alt='profile pic'
					src='https://ca.slack-edge.com/T0351JZQ0-U029XL68BRQ-cfa6d40a8e95-512'
				/>
			</div>
			<div className='home-text'>
				<div className='animate__animated animate__fadeInUp'>
					<h1>Hi, I'm Kaleb McCullough.</h1>
					<br />
					<TypeIt
						options={{
							loop: true,
							// strings: [
							// 	"I'm a Web Developer located in Saint Louis, and have been doing it full-time for almost two years.",
							// 	'I love working with all forms of media.',
							// ],
						}}
						element={'h2'}
						style={{ fontSize: 30 }}>
						I'm a Web Developer located in Saint Louis, and have been doing it
						full-time for almost two years.
						<br /> <wbr />
						<br />I love working with all forms of tech and media!
					</TypeIt>
				</div>
			</div>
		</div>
	);
};

export default Home;
