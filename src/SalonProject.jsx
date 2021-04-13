import Slider from "react-slick";

import Footer from "./footer.js";
import Logo from "./logo";

import salon1 from "./images/Salon1.png";
import salon2 from "./images/Salon2.png";
import salon3 from "./images/Salon3.png";
import salon4 from "./images/Salon4.png";
import salon5 from "./images/Salon5.png";

const SalonProject = () => {
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
						<h1> Salon-Assist</h1>
						<p className='para'>
							Salon Assist is an application where customers would complete a
							quiz detailing information about their hair. The stylists would
							then have a record of appointments and other notes from the
							previous stylist. I created Salon Assist due to my frustration
							with the process of going to a salon. I used PostgreSQL to write
							queries and React on the front-end.
						</p>

						<div className='ProjectList'>
							<ul>
								<li className='pj_title'>
									<span>Stack</span>
								</li>

								<li>React</li>
								<li>PostgreSQL</li>
								<li>Express</li>
								<li>NodeJS</li>
							</ul>
							<ul>
								<li className='pj_title'>
									<span>Code</span>
								</li>
								<li>
									<a
										className='aLink'
										href='https://github.com/mabdulul/Salon-Assist/blob/master/README.md'
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
									<span>Demo Video</span>
								</li>
								<li>
									<a
										className='aLink'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.youtube.com/watch?v=EylWbippy9I'
									>
										Video
									</a>
								</li>
							</ul>
						</div>

						<Slider {...settings}>
							<div>
								<img className='img-fluid' src={salon1} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={salon2} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={salon3} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={salon4} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={salon5} alt='' />
							</div>
						</Slider>
						<div className='ProjectDescription'>
							<h2>Purpose and Goal</h2>
							<p className='para'>
								This was my first full-stack application. The purpose of the
								application was to learn how to write the backend. As a
								front-end developer, I need to understand how both the front-end
								and back-end interact. In this project, I learned how to deal
								with state management in React, how to write PostgreSQL queries
								and to get acquainted with MVC-designed patterns.
							</p>

							<h2>Problems/Solutions </h2>
							<p className='para'>
								The main problem I had was the login and logout. I was not sure
								how to make the login state global to all components. I solved
								this using the Context-API and local storage.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SalonProject;
