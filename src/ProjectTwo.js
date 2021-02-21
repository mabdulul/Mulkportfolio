import Slider from "react-slick";

import Footer from "./footer.js";
import Logo from "./logo";

import gitnow1 from "./images/gitnow1.png";
import gitnow2 from "./images/gitnow2.png";
import gitnow3 from "./images/gitnow3.png";
import gitnow4 from "./images/gitnow4.png";

const ProjectTwo = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='container '>
			<div className='row section '>
				<div className='col-sm-12 col-md-12 col-lg-12 header '>
					<div className='slick__container'>
						<Logo />
						<h1>GitHub Jobs API</h1>
						<p className='para'>
							This is frontendmentor project. This is fully-functional jobs
							board using the GitHub Jobs API and is it is full responsive. I
							also used React hooks. This application allows users to search for
							tech jobs.
						</p>

						<div className='ProjectList'>
							<ul>
								<li className='pj_title'>
									<span>Stack</span>
								</li>

								<li>React</li>
								<li>HTML/CSS</li>
							</ul>
							<ul>
								<li className='pj_title'>
									<span>Code</span>
								</li>
								<li>
									<a
										className='aLink'
										href='https://github.com/mabdulul/JobGit'
										target='_blank'
										rel='noopener noreferrer'
									>
										{" "}
										Repository
									</a>
								</li>
							</ul>
							<ul>
								<li className='pj_title'>
									<span>Live</span>
								</li>
								<li>
									<a
										className='aLink'
										target='_blank'
										rel='noopener noreferrer'
										href='https://mulk-github.netlify.app/'
									>
										View Site
									</a>
								</li>
							</ul>
						</div>

						<Slider {...settings}>
							<div>
								<img className='img-fluid' src={gitnow1} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={gitnow2} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={gitnow3} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={gitnow4} alt='' />
							</div>
						</Slider>
						<div className='ProjectDescription'>
							<h2>Purpose and Goal</h2>
							<p className='para'>
								I built this project to become familiar with the react hook
								useReducer. I also wanted to get better at translating a Figma
								design to code and get used to the thought process.Furthermore,
								this project introduced me to CSS Grid.
							</p>

							<h2>Problems/Solutions </h2>
							<p className='para'>
								The main problem I had with my code it was too repetitive. I had
								too many functions calling the GitHub API. Decreasing my
								repetition was one of my main goals for this project. I solved
								this issue by using useReducer and creating my own react hook. I
								also had a CORS issue. I resolve this by creating a proxy with
								Netlify Functions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectTwo;
