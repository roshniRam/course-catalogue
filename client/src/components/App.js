import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Tutorials from './Tutorials';
import NewTutorialForm from './NewTutorialForm';
import Footer from './Footer';

import store from '../store';
import { setCurrentUser, logOut } from '../actions/auth.action';
import setAuthToken from '../utils/setAuthToken';

import '../sass/main.scss';

// Check for token in local storage
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set current user
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logOut());
		// Redirect to homepage
		window.location.href = '/';
	}
}

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
