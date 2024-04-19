import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <input type="text" />
            <div>
                <Link>News</Link>
                <Link>Destination</Link>
                <Link>Blog</Link>
                <Link>Contact</Link>
            </div>
            <button>Login</button>
            hello from nav
        </div>
    );
};

export default Navbar;