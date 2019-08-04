import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Tutorials from './Tutorials';
import NewTutorialForm from './NewTutorialForm';
import Footer from './Footer';

import '../sass/main.scss';

function App() {
	return (
		<Router>
			<Navbar />
			<section className="view">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/submit-tutorial" component={NewTutorialForm} />
					<Route exact path="/tutorials/:tag" component={Tutorials} />
				</Switch>
			</section>
			<Footer />
		</Router>
	);
}

export default App;
