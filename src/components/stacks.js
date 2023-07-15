import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';

const Stacks = () => {
	useEffect(() => {
		new Glide('.glide', {
			type: 'carousel',
			perView: 6,
			autoplay: 2000,
			focusAt: 'center',
			gap: 40,
			breakpoints: {
				1200: {
					perView: 4,
				},
				800: {
					perView: 2,
				},
				480: {
					perView: 1,
				},
			},
		}).mount();
		console.log('whoa');
	}, []);

	return (
		<div class='stacks'>
            <h2>Tools I've Used:</h2>
			<div class='glide'>
				<div class='glide__track' data-glide-el='track'>
					<ul class='glide__slides'>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' />
						</li>
						<li class='glide__slide'>
							<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Stacks;
