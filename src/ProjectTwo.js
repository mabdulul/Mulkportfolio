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
		<div class='container '>
			<div class='row section '>
				<div class='col-sm-12 col-md-12 col-lg-12 header '>
					<div class='slick__container'>
						<Logo />
						<h1>GitHub Jobs API</h1>
						<p class='para'>
							This is frontendmentor project. This is fully-functional jobs
							board using the GitHub Jobs API and is it is full responsive. This
							application allows users to search for tech jobs.
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
											<a class='aLink' href='/'>
												{" "}
												Repository
											</a>
										</td>
										<td>
											<a class='aLink' href='/'>
												View Site
											</a>
										</td>
									</tr>
									<tr class='pj_group'>
										<td>Shopify</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr class='pj_group'>
										<td>Liquid </td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Slider {...settings}>
							<div>
								<img class='img-fluid' src={gitnow1} alt='' />
							</div>
							<div>
								<img class='img-fluid' src={gitnow2} alt='' />
							</div>
							<div>
								<img class='img-fluid' src={gitnow3} alt='' />
							</div>
							<div>
								<img class='img-fluid' src={gitnow4} alt='' />
							</div>
						</Slider>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectTwo;
