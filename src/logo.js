import { Link } from "react-router-dom";
import mylogo from "./mylogo.svg";

const Logo = () => {
	return (
		<Link to='/'>
			<img class='mylogo' src={mylogo} alt='logo' />
		</Link>
	);
};

export default Logo;
