import { Link } from "react-router-dom";
import mylogo from "./newlogo5.svg";

const Logo = () => {
	return (
		<Link to='/'>
			<img className='mylogo' src={mylogo} alt='logo' />
		</Link>
	);
};

export default Logo;
