import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import 'animate.css';
import Stacks from './components/stacks';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Experiences } from './components/experiences';

function App() {
	return (
		<div className='App'>
			{/* <Header /> */}
			<div className='columns'>
				<Home />
				<div className='column'>
					<About />
					<Experiences />
					<Projects />
				</div>
			</div>
			{/* <Stacks /> */}
		</div>
	);
}

export default App;
