import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import 'animate.css';
import Stacks from './components/stacks';

function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Stacks />
		</div>
	);
}

export default App;
