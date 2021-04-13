import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import SalonProject from "./SalonProject";
import TestStyle from "./test";

import ScrollToTop from "./ScrollToTop";
import About from "./About";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route>
				<ScrollToTop />
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/dreamyCream' component={ProjectOne} />
					<Route path='/github' component={ProjectTwo} />
					<Route path='/Salon-Assist' component={SalonProject} />
					<Route path='/test' component={TestStyle} />
					<Route path='/' component={App} />
				</Switch>
			</Route>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
