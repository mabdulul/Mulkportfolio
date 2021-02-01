import linkedinlogo from "./images/linkedin.svg";
import githublogo from "./images/github.svg";

import githubproject from "./images/gitjob.png";
import DC from "./images/DCdesktop.png";
import poke from "./images/pokefront.png";

import "./myscss.scss";

import { Link } from "react-router-dom";
import Footer from "./footer.js";
import Logo from "./logo";

function App() {
	return (
		<div className='App'>
			<div class='container'>
				<div class='row section'>
					<div class='col-sm-12 col-md-12 col-lg-12 header '>
						<Logo />
						<div class='header__content'>
							<div class='header__icons'>
								<span class='header__line'></span>
								<img class='icons' src={linkedinlogo} alt='linkedin logo' />
								<img class='icons' src={githublogo} alt='github logo' />
							</div>
							<div class='header__text'>
								<h1>Hi! I am Mulk and I'm Front End Developer. </h1>
								<span>
									<h1>
										Read more{" "}
										<Link class='aLink' to='/about'>
											about me
										</Link>{" "}
										or{" "}
										<a class='aLink' href='#footer'>
											contact me
										</a>
									</h1>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class='row'>
					<div class='col-sm-12 col-md-12 col-lg-12 MySkills'>
						<div class='MySkills_Section'>
							<h1>My Skills</h1>
							<p class='MySkills_p para'>
								Through my studies at, I've gained skills in web development
								concepts, and have dedicated a lot of my free time to apply
								these concepts to real-world scenarios and applications.
							</p>
							<div class='MySkills_List'>
								<ul class='MySkills_Group'>
									<li>Javascript ES6</li>
									<li>HTML & CSS</li>
								</ul>
								<ul class='MySkills_Group'>
									<li>React</li>
									<li>SASS</li>
								</ul>
								<ul class='MySkills_Group'>
									<li>Git</li>
									<li>Shopify</li>
								</ul>
								<ul class='MySkills_Group'>
									<li>SQL</li>
									<li>NodeJS</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class='row section'>
					<div class='col-sm-12 col-md-12 col-lg-12 MyProjects'>
						<div class='MyProjects_Section'>
							<h1>Projects</h1>
							<p class='MyProjects_p para'>
								I always enjoying learning new things and technologies. Here are
								some of the projects that I have worked on
							</p>
						</div>
					</div>
				</div>
				<div class='row '>
					<div class='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div class='MyActualProjects_Section'>
							<Link class='btnA' to='/github'>
								<img
									class='project img-fluid'
									src={githubproject}
									alt='github project'
								/>

								<h1>GitHub Jobs API</h1>
								<p class='MyActualProjects_p para'>
									This is fully-functional jobs board using the GitHub Jobs API.
									I built this application using React.
								</p>
								<p class='btnA-V'>View Project</p>
							</Link>
						</div>
					</div>
					<div class='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div class='MyActualProjects_Section'>
							<Link class='btnA' to='/dreamyCream'>
								<img
									class='project img-fluid'
									src={DC}
									alt='dreamy cream project'
								/>
								<h1>Dreamy Cream</h1>
								<p class='MyActualProjects_p para'>
									A e-commerce application that uses Shopify for a ice cream
									company.
								</p>
								<p class='btnA-V'>View Project</p>
							</Link>
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div class='MyActualProjects_Section'>
							<Link class='btnA' to='/pokemon'>
								<img
									class='project img-fluid'
									src={poke}
									alt='pokemon project'
								/>

								<h1>Pokemon API</h1>
								<p class='MyActualProjects_p para'>
									This application uses the Pokemon API.
								</p>
								<p class='btnA-V'>View Project</p>
							</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
