import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import 'animate.css';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Experiences } from './components/experiences';


function App() {
	return (
		<div className='App'>
			<div className='columns'>
				<Home />
				<div className='column'>
					<About />
					<Experiences />
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
