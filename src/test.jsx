import image1 from "./images/CreamFront2.png";
import image2 from "./images/Cream1.png";
import image3 from "./images/Cream2.png";
import image4 from "./images/Cream3.png";
import image5 from "./images/CreamFAQ.png";
import Logo from "./logo";

import Slider from "react-slick";

const TestStyle = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='container'>
			<div className='row section'>
				<div class='col-sm-12 col-md-12 col-lg-12 header'>
					<Logo />
					<h1>Dreamy Cream</h1>
					<p class='p_projects para'>
						Dreamy Cream is an e-commerce application that sells ice cream to
						users. I built this application using vanilla javascript and
						Shopify. I also design and coded the template.
					</p>
					<div class=''>
						<div class='row'>
							<div class='col-sm-11 col-md-11 col-lg-11 ProjectList'>
								<ul>
									<li>
										<h4>Stack</h4>
									</li>
									<li>Shop</li>
									<li>React</li>
									<li>HTML/CSS</li>
								</ul>
								<ul>
									<li>
										<h4>Code</h4>
									</li>
									<li>
										{" "}
										<a
											class='aLink'
											href='https://github.com/mabdulul/DreamyCream'
											target='_blank'
											rel='noopener noreferrer'
										>
											{" "}
											Repository
										</a>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Live</h4>
									</li>
									<li>
										{" "}
										<a
											class='aLink'
											href='https://6l50wp9z22ujhw25-52517863605.shopifypreview.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											View Site
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<Slider {...settings}>
						<div>
							<img class='img-fluid' src={image1} alt='' />
						</div>
						<div>
							<img class='img-fluid' src={image2} alt='' />
						</div>
						<div>
							<img class='img-fluid' src={image3} alt='' />
						</div>
						<div>
							<img class='img-fluid' src={image4} alt='' />
						</div>
						<div>
							<img class='img-fluid' src={image5} alt='' />
						</div>
					</Slider>
				</div>
			</div>

			<div className='row section'>
				<div class='col-sm-12 col-md-12 col-lg-12 Project_test'>
					{/* <div class='Project_List '>
						<div>
							<ul>
								<li>
									<h5>Stack</h5>
								</li>
								<li>HTML/CSS</li>
								<li>Shopify</li>
								<li>JavaScript</li>
							</ul>
							<ul>
								<li>
									<h5>Code</h5>
								</li>
								<li>REPOSITORY</li>
							</ul>
							<ul>
								<li>
									<h5>Live</h5>
								</li>
								<li>REPOSITORY</li>
							</ul>
						</div>
					</div> */}
					<div>
						<h2>Project Purpose and Goal</h2>
						<p class='para'>
							Dreamy Cream is an e-commerce application that sells ice cream to
							users. I built this application using vanilla javascript and
							Shopify. I also design and coded the template.
						</p>

						<h2>My Contribution</h2>
						<p class='para'>
							I performed all market research and design activities including
							exploration, wireframes, high-fidelity designs, and interactive
							prototypes for user feedback and testing. I facilitated four
							moderated usability sessions remotely and used this feedback to
							iterate and improve my design solutions.
						</p>
						<h2>The Stack</h2>
						<p class='para'>
							React was the clear choice for this project, because of its ease
							of state management and the amount of packages available. We also
							utilized Netlify as a server to host Decore, because it allows
							live updates alongside github. In the future, we hope to add Redux
							to this project to clean up the states a bit, and we also are
							looking into a backend that can allow writing to files so users
							can download the code right to their computer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestStyle;
