import githubproject from "./images/gitjob.png";
import DC from "./images/DCdesktop.png";
import SalonCover from "./images/newSalonCover.png";
import hello from "./images/Hi.svg";

import "./myscss.scss";

import { Link } from "react-router-dom";
import Footer from "./footer.js";
import Logo from "./logo";

function App() {
	return (
		<div className='App'>
			<div></div>
			<div className='container'>
				<div className='row section'>
					<div className='col-sm-12 col-md-12 col-lg-12 header '>
						<Logo />
						<div className='header__content'>
							<div className='header__text'>
								<h1>
									Hi! I am Mulk <span className='hand wave'>👋🏾</span>
								</h1>
								<span>
									<h1>I'm a Front End Developer.</h1>
								</span>
								<span>
									<h1>
										Read more{" "}
										<Link className='aLink' to='/about'>
											about me
										</Link>{" "}
										or{" "}
										<a className='aLink' href='#footer'>
											contact me
										</a>
									</h1>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-12 MySkills'>
						<div className='MySkills_Section'>
							<h1>My Skills</h1>
							<p className='MySkills_p  para'>
								These are skills I have learned on my own and in my BootCamp.
							</p>

							<div className='MySkills_List'>
								<ul className='MySkills_Group'>
									<li>Javascript ES6</li>
									<li>HTML & CSS</li>
								</ul>
								<ul className='MySkills_Group'>
									<li>React</li>
									<li>SASS</li>
								</ul>
								<ul className='MySkills_Group'>
									<li>Git</li>
									<li>Shopify</li>
								</ul>
								<ul className='MySkills_Group'>
									<li>SQL</li>
									<li>NodeJS</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='row section'>
					<div className='col-sm-12 col-md-12 col-lg-12 MyProjects'>
						<div className='MyProjects_Section'>
							<h1>Projects</h1>
							<p className='MyProjects_p  para'>
								I always enjoy learning new things and technologies. Here are
								some of the projects that I have worked on.
							</p>
						</div>
					</div>
				</div>
				<div className='row '>
					<div className='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div className='MyActualProjects_Section'>
							<Link className='btnA' to='/github'>
								<div className='flip_images'>
									<img
										className='project img-fluid'
										src={githubproject}
										alt='github project'
									/>
									<img
										className='project--top img-fluid'
										src={hello}
										alt='hello'
									/>
								</div>

								<h1>GitHub Jobs API</h1>
								<p className='MyActualProjects_p para'>
									This is a fully-functional jobs board using the GitHub Jobs
									API. I built this application using React.
								</p>
							</Link>
						</div>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div className='MyActualProjects_Section'>
							<Link className='btnA' to='/dreamyCream'>
								<div className='flip_images'>
									<img
										className='project img-fluid'
										src={DC}
										alt='dreamy cream project'
									/>
									<img
										className='project--top img-fluid'
										src={hello}
										alt='hello'
									/>
								</div>

								<h1>Dreamy Cream</h1>
								<p className='MyActualProjects_p para'>
									A e-commerce application that is built with Shopify. Dreamy
									Cream is store that sells ice cream.
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12 col-md-6 col-lg-6 MyActualProjects'>
						<div className='MyActualProjects_Section'>
							<Link className='btnA' to='/Salon-Assist'>
								<div className='flip_images'>
									<img
										className='project img-fluid'
										src={SalonCover}
										alt='Salon-Assist'
									/>
									<img
										className='project--top img-fluid'
										src={hello}
										alt='hello'
									/>
								</div>

								<h1>Salon-Assist</h1>
								<p className='MyActualProjects_p para'>
									Salon-Assist is an application that allows customers to
									complete a quiz detailing information about their hair and
									scheduling appointments.
								</p>
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
