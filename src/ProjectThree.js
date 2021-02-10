import Slider from "react-slick";

import Footer from "./footer.js";
import Logo from "./logo";

import image1 from "./images/pokemon1.png";
import image2 from "./images/pokemon2.png";

const ProjectThree = () => {
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
						<h1>Pokemon API</h1>
						<p class='para'>
							This application uses the Pokemon API. I used react to build the
							application. The users are able to search for Pokemon.
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
										<td>React</td>
										<td>
											<a
												class='aLink'
												href='https://github.com/mabdulul/Pokedex'
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
												href='https://pokemon-search-database.netlify.app/'
												target='_blank'
												rel='noopener noreferrer'
											>
												View Site
											</a>
										</td>
									</tr>
									<tr class='pj_group'>
										<td>HTML/CSS</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr class='pj_group'>
										<td></td>
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
						</Slider>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectThree;
