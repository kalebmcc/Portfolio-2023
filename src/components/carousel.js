// Required Core Stylesheet
import '@glidejs/glide/src/assets/sass/glide.core';

// Optional Theme Stylesheet
import '@glidejs/glide/src/assets/sass/glide.theme';
import './styles.css';
import Glide from '@glidejs/glide';

new Glide('.glide', {
	peek: 50,
	perView: 2,
	type: 'carousel',
}).mount();
