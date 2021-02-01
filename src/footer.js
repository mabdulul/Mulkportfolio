import resume from "./images/copy.svg";
import phone from "./images/phone-call.svg";
import email from "./images/email.svg";
import linkedinlogo from "./images/linkedin.svg";
import githublogo from "./images/github.svg";

const Footer = () => {
	return (
		<div class='row section section_footer' id='footer'>
			<div class='col-sm-12 col-md-12 col-lg-12 Contact'>
				<div class='Contact_Section'>
					<h1>Let's Keep In Touch!</h1>
					<div class='Contact_Frame'>
						<div class='Contact_group'>
							<img class='ContactPic' src={phone} alt='' />
							<span>678-927-4983</span>
						</div>
						<div class='Contact_group'>
							<img class='ContactPic' src={resume} alt='' />
							<span>See my resume</span>
						</div>
						<div class='Contact_group'>
							<img class='ContactPic' src={email} alt='' />
							<span>mabdulul@gmail.com</span>
						</div>
						<div class='Contact_group'>
							<a class='aLink' href='https://github.com/mabdulul'>
								<img class='ContactPic' src={githublogo} alt='Github' />
								<span>/mabdulul</span>
							</a>
						</div>
						<div class='Contact_group'>
							<a
								class='aLink'
								href='https://www.linkedin.com/in/mulk-abdulhadi-277476108/'
							>
								<img class='ContactPic' src={linkedinlogo} alt='linkedin' />
								<span>/mulk-abdulhadi-277476108</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
