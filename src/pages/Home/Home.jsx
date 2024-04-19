import bgImage from "../../assets/images/Rectangle 1.png"
import Navbar from "../components/Navbar";

const Home = () => {
    const homeStyle = {
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <div style={homeStyle}>
            <Navbar/>
            Hello from home page
        </div>
    );
};

export default Home;