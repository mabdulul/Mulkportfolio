import Slider from "react-slick";
import image1 from "./images/CreamFront2.png";
import image2 from "./images/Cream1.png";
import image3 from "./images/Cream2.png";
import image4 from "./images/Cream3.png";
import image5 from "./images/CreamFAQ.png";

import Footer from "./footer.js";
import Logo from "./logo";

import { useEffect } from "react";

function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
}

const ProjectOne = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='container'>
			<ScrollToTopOnMount />
			<div className='row section '>
				<div className='col-sm-12 col-md-12 col-lg-12 header '>
					<div className='slick__container'>
						<Logo />
						<h1>Dreamy Cream</h1>
						<p className='para'>
							Dreamy Cream is an e-commerce application that sells ice cream to
							users. I built this application using vanilla javascript and
							Shopify. I also design and coded the template.
						</p>
						<div className='ProjectList'>
							<ul>
								<li className='pj_title'>
									<span>Stack</span>
								</li>
								<li>Shopify</li>
								<li>React</li>
								<li>HTML/CSS</li>
							</ul>
							<ul>
								<li className='pj_title'>
									<span>Code</span>
								</li>
								<li>
									{" "}
									<a
										className='aLink'
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
								<li className='pj_title'>
									<span>Live</span>
								</li>

								<li>
									{" "}
									<a
										className='aLink'
										href='https://rk40qwdvr5i9byi3-52517863605.shopifypreview.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										View Site
									</a>
								</li>
								<li>Password: test</li>
							</ul>
						</div>

						<Slider {...settings}>
							<div>
								<img className='img-fluid' src={image1} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={image2} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={image3} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={image4} alt='' />
							</div>
							<div>
								<img className='img-fluid' src={image5} alt='' />
							</div>
						</Slider>
						<div className='ProjectDescription'>
							<h2>Project Purpose and Goal</h2>
							<p className='para'>
								Dreamy Cream is a freelance e-commencer site that I work for
								Rayya Ulusoy. She needed a site that contained her color schema
								and important shipping information and FAQ page. I created the
								site with Shopify because it was easy to use, and I didn't need
								any additional plugins. I also needed to ensure that the site
								was customizable.
							</p>

							<h2>Problems/Solutions </h2>
							<p className='para'>
								The main problem I had was learning how to use the Shopify
								interface and learning liquid. However, after watching
								tutorials, and reading the documentation it was easy to pick-up.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ProjectOne;
