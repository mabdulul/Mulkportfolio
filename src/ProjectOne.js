import Slider from "react-slick";
import image1 from "./images/CreamFront2.png";
import image2 from "./images/Cream1.png";
import image3 from "./images/Cream2.png";
import image4 from "./images/Cream3.png";
import image5 from "./images/CreamFAQ.png";

import Footer from "./footer.js";
import Logo from "./logo";

const ProjectOne = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div class='container '>
			<div class='row section '>
				<div class='col-sm-12 col-md-12 col-lg-12 header '>
					<div class='slick__container'>
						<Logo />
						<h1>Dreamy Cream</h1>
						<p class='para'>
							Dreamy Cream is an e-commerce application that sells ice cream to
							users. I built this application using vanilla javascript and
							Shopify. I also design and coded the template.
						</p>
						<div class='project_table'>
							<table>
								<tbody>
									<tr class='pj_group'>
										<td class='pj_title'>Stack</td>
										<td class='pj_title'>Code</td>
										<td class='pj_title'>Live</td>
									</tr>
									<tr class='pj_group'>
										<td>JavaScript</td>
										<td>
											<a
												class='aLink'
												href='https://github.com/mabdulul/DreamyCreamShopify'
												target='_blank'
												rel='noopener noreferrer'
											>
												{" "}
												Repository
											</a>
										</td>
										<td>
											<a
												class='aLink'
												href='https://dreamycream-store.myshopify.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												View Site
											</a>
										</td>
									</tr>
									<tr class='pj_group'>
										<td>Shopify</td>
										<td></td>
										<td>Password: test2</td>
									</tr>
									<tr class='pj_group'>
										<td>Liquid </td>
										<td></td>
										<td>&nbsp;</td>
									</tr>
								</tbody>
							</table>
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
			</div>
			<Footer />
		</div>
	);
};

export default ProjectOne;
