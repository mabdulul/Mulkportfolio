import resume from "./images/copy.svg";
import phone from "./images/phone-call.svg";
import email from "./images/email.svg";
import linkedinlogo from "./images/linkedin.svg";
import githublogo from "./images/github.svg";

const Footer = () => {
	return (
		<div className='row section section_footer' id='footer'>
			<div className='col-sm-12 col-md-12 col-lg-12 Contact'>
				<div className='Contact_Section'>
					<h1>Let's Keep In Touch!</h1>
					<div className='Contact_Frame'>
						<div className='Contact_group'>
							<img className='ContactPic' src={phone} alt='' />
							<span>678-927-4983</span>
						</div>
				
						<div className='Contact_group'>
							<img className='ContactPic' src={email} alt='Mail' />
							<span>mabdulul@gmail.com</span>
						</div>
						<div className='Contact_group'>
							<a className='aLink' href='https://github.com/mabdulul'>
								<img className='ContactPic' src={githublogo} alt='Github' />
								<span>/mabdulul</span>
							</a>
						</div>
						<div className='Contact_group'>
							<a
								className='aLink'
								href='https://www.linkedin.com/in/mulk-abdulhadi-277476108/'
							>
								<img className='ContactPic' src={linkedinlogo} alt='linkedin' />
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
