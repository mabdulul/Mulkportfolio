import Footer from "./footer";

import Logo from "./logo";
const About = () => {
	return (
		<div className='container '>
			<div className='row section '>
				<div className='col-sm-12 col-md-12 col-lg-12 header '>
					<Logo />
					<div className='About_Content'>
						<h1 className='h1-default'>About</h1>
						<p className='para para--about'>
							I am Mulk Abdulhadi. I have spent a lot of time in technical
							support, and now I want to write the code. In the past few months,
							I have spent it at DigitalCrafts, a coding Bootcamp. I have
							learned a lot and it has been a great experience.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
